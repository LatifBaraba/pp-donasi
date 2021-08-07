import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "../../actionTypes";

import axios from "axios";
import history from "../../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FORGOTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/login`;

export function fetchForgot(token, payload) {
  return (dispatch) => {
    // axios(FORGOTURL, {
    //   method: "POST",
    //   data: {
    //     email: payload.email,
    //   },
    //   headers: {
    //     "pp-token": `${token}`,
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     dispatch(forgotPasswordSuccess(res));
    //     toast.success("Check your email for activation forgot password !");
    //     localStorage.setItem("token", token);
    //     history.push("/login");
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 400) {
    //       toast.error("incorrect username or password !");
    //     } else if (err.response.status === 401) {
    //       toast.error("password not match !");
    //     }
    //     dispatch(forogtPasswordFailure(err));
    //   });
  };
}

// Forgot
const forgotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

const forogtPasswordFailure = () => ({
  type: FORGOT_PASSWORD_FAILURE,
});
