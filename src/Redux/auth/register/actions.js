import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../../actionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import history from "../../../history";
const AddURL = `${process.env.REACT_APP_BASE_URL}/user/register`;

export function fetchRegister(token, payload) {
  return (dispatch) => {
    dispatch(addUserSuccess(payload));
    axios(AddURL, {
      method: "POST",
      data: {
        email: payload.email,
        phone_number: payload.no_hp,
        password: payload.password,
        conf_password: payload.konfirmasi_password,
        nama_lengkap: payload.nama_lengkap,
        nama_panggilan: payload.nama_panggilan,
        alamat: payload.alamat
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        setTimeout(() => {
          toast.success("Register Account is Succeesful !");
          dispatch(addUserSuccess(res));
          history.push("/login");
        }, 2000);
      })
      .catch((err) => {        
        console.log(err.response.data.message);
        // toast.error(err.response.data.message)
        toast.error("Username, Email or Password not match !");
        if (err.response.status === 401) {
          toast.error("Unauthorized");
          // dispatch(fetchRefreshToken(token));
          localStorage.removeItem("token");
          history.push("/register");
        }
        dispatch(addUserFailure(err));
      });
  };
}

// Register User

const addUserSuccess = (payload) => ({
  type: ADD_USER_SUCCESS,
  payload,
});

const addUserFailure = () => ({
  type: ADD_USER_FAILURE,
});
