import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../../actionTypes";
import axios from "axios";
import history from "../../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LOGINURL = `${process.env.REACT_APP_BASE_URL}/auth/user/login`;
const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;

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
        history.push("/dashboard");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Usernama atau password tidak sesuai");
        } else if (err.response.status === 401) {
          toast.error("Password tidak sesuai");
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
        // localStorage.setItem("token", token)
        localStorage.setItem("username", payload.username);
        // history.push("/otime/"+donasi.seo_url)

        const uri = uripath.split("/");

        if (uri[1] == "rutin") {
          history.push({
            pathname: "/rutin/" + uri[2],
            // state: { donasi: donasi }
          });
        } else if (uri[1] != "rutin" || uri[1] != "otime") {
          history.push({
            pathname: "/" + uri[1],
            // state: { data: donasi }
          });
        } else {
          history.push({
            pathname: "/otime/" + uri[2],
            // state: { donasi: donasi }
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Usernama atau password tidak sesuai");
        } else if (err.response.status === 401) {
          toast.error("Password tidak sesuai");
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
        localStorage.removeItem("username");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        // localStorage.removeItem("token");
        localStorage.removeItem("username");
        history.push("/dashboard");
        dispatch(logoutFailure(err));
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
