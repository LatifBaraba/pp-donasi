import {
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,    
  } from "../../actionTypes";
  import axios from "axios";
  import history from "../../../history";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  const RESETURL = `${process.env.REACT_APP_BASE_URL}/auth/user/login`;
  
  export function fetchReset(token, payload) {
    return (dispatch) => {
      // axios(RESETURL, {
      //     method: 'POST',
      //     data: {
      //         password: payload.password
      //         confirm_password: payload.confirm_password,
      //     },
      //     headers: {
      //         "pp-token": `${token}`,
      //         "Content-type": "application/json"
      //     }
      // })
      // .then(res => {
      //     dispatch(resetSuccess(res));
      //     toast.success("Reset Success !")
      //     localStorage.setItem("token", token)
      //     history.push("/login")
      // })
      // .catch(err => {
      //     if (err.response.status === 400) {
      //         toast.error("incorrect username or password !")
      //     } else if (err.response.status === 401) {
      //         toast.error("password not match !")
      //     }
      //     dispatch(resetFailure(err));
      // });
  };
  }
  
  // Reset
  const reset = () => ({
    type: RESET_PASSWORD,
  });
  
  const resetSuccess = (payload) => ({
    type: RESET_PASSWORD_SUCCESS,
    payload,
  });
  
  const resetFailure = () => ({
    type: RESET_PASSWORD_FAILURE,
  });
  
  