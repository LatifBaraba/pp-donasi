import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "../../actionTypes";

import axios from "axios";
import history from "../../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FORGOTURL = `${process.env.REACT_APP_BASE_URL}/user/forgot-password`;

export function fetchForgot(token, payload) {
  return (dispatch) => {
    axios(FORGOTURL, {
      method: "POST",
      data: {
        email: payload.email,
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        dispatch(forgotPasswordSuccess(res));
        toast.success("Check your email for activation forgot password !");
        localStorage.setItem("token", token);
        history.push("/forgot");
      //   history.push({
      //     pathname: '/login',
      //     state: { data: "kosong" }
      // });
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 400) {
          toast.error("Usernama atau password tidak sesuai");
        } else if (err.response.status === 401) {
          toast.error("Password tidak sesuai");
        } else if (err.response.status === 422) {
          toast.error("Username tidak sesuai");
        }
        dispatch(forogtPasswordFailure(err));
      });
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
