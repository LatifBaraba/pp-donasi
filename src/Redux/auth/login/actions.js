import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from "../../actionTypes";
import axios from "axios";
import history from "../../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRefreshToken } from "../../token/action";

const LOGINURL = `${process.env.REACT_APP_BASE_URL}/auth/user/login`;
const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;
const PROFILEURL = `${process.env.REACT_APP_BASE_URL}/user`;

export function fetchLogin(token, payload) {
  return (dispatch) => {
    axios(LOGINURL, {
      method: "POST",
      data: {
        username: payload.username,
        password: payload.password,
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        dispatch(loginSuccess(res));        
        toast.success("Login Success !");
        // localStorage.setItem("token", token)
        localStorage.setItem("username", payload.username);
        setTimeout(() => {          
          dispatch(fetchProfile(token))
        }, 1500);
        history.push("/dashboard");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Usernama atau password tidak sesuai");
        } else if(err.response.status === 401){
            toast.error("Harap Login Terlebih Dahulu")
            dispatch(fetchRefreshToken(token))
            localStorage.removeItem("token");
            history.push({
              pathname: "/login",
              state: { data: "kosong" },
            });
        } else if (err.response.status === 422) {
          toast.error("Username tidak sesuai");
        }
        dispatch(loginFailure(err));
      });
  };
}

export function fetchLoginSession(token, payload, donasi, uripath) {

  return (dispatch) => {
    axios(LOGINURL, {
      method: "POST",
      data: {
        username: payload.username,
        password: payload.password,
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        dispatch(loginSuccess(res));
        toast.success("Login Success !");
        localStorage.setItem("username", payload.username);
        setTimeout(() => {          
          dispatch(fetchProfile(token))
        }, 1500);
        const uri = uripath.split("/");
        console.log(typeof uri[1])
        console.log(uri[1])
        
        if (uri[1] === "rutin") {
          history.push({
            pathname: "/rutin/" + uri[2],
            // state: { donasi: donasi }
          });
        } else if (uri[1] === "otime"){
          console.log("masuk else");
          history.push({
            pathname: "/otime/" + uri[2],
            state: { donasi: donasi }
          });
        } else if (uri[1] !== "rutin" || uri[1] !== "otime") {
          console.log("masuk if 2")
          history.push({
            pathname: "/" + uri[1],
            // state: { data: donasi }
          });
        }  else {
          history.push({
            pathname: "/dashboard",
            // state: { donasi: donasi }
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Usernama atau password tidak sesuai");
        } else if(err.response.status === 401){
            toast.error("Harap Login Terlebih Dahulu")
            dispatch(fetchRefreshToken(token))
            localStorage.removeItem("token");
            history.push({
              pathname: "/login",
              state: { data: "kosong" },
            });
            
        } else if (err.response.status === 422) {
          toast.error("Username tidak sesuai");
        }
        dispatch(loginFailure(err));
      });
  };
}

export function fetchLogout(token) {
  return (dispatch) => {
    axios(LOGOUTURL, {
      method: "POST",
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        dispatch(logoutSuccess(res));
        // localStorage.removeItem("token");
        setTimeout(() => {
          localStorage.removeItem("username");
          localStorage.removeItem("userprofile");
          localStorage.removeItem("useremail");
          localStorage.removeItem("nama_lengkap");
          history.push("/dashboard");          
        }, 1500);
        toast.success("Logout Success !");
      })
      .catch((err) => {
        console.log(err);
        // localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userprofile");
        localStorage.removeItem("useremail");
        localStorage.removeItem("nama_lengkap");
        history.push("/dashboard");
        dispatch(logoutFailure(err));
      });
  };
}

export function fetchProfile(token) {
  return (dispatch) => {
    axios(PROFILEURL, {
      method: "GET",
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res.data.data)
        localStorage.setItem("userprofile", res.data.data.username);
        localStorage.setItem("useremail", res.data.data.email);
        localStorage.setItem("nama_lengkap", res.data.data.nama_lengkap);
        window.location.reload()
        dispatch(profileSuccess(res.data.data));        
      })
      .catch((err) => {
        console.log(err);
        dispatch(profileFailure(err));
        if(err.response.status === 401){
          toast.error("Harap Login Terlebih Dahulu")
          dispatch(fetchRefreshToken(token))
          localStorage.removeItem("token");
          history.push({
            pathname: "/login",
            state: { data: "kosong" },
          });
      }
      });
  };
}


// Login
const login = () => ({
  type: LOGIN,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// Logout
const logout = () => ({
  type: LOGOUT,
});

const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

const logoutFailure = () => ({
  type: LOGOUT_FAILURE,
});


// Profile
const profile = () => ({
  type: PROFILE,
});

const profileSuccess = (payload) => ({
  type: PROFILE_SUCCESS,
  payload,
});

const profileFailure = () => ({
  type: PROFILE_FAILURE,
});
