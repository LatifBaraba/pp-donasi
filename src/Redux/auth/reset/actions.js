import {
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,    
  } from "../../actionTypes";
  import axios from "axios";
  import history from "../../../history";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  const RESETURL = `${process.env.REACT_APP_BASE_URL}/user/reset-password`;
  
  export function fetchReset(token, payload) {
    return (dispatch) => {
      // console.log(token)
      // console.log(payload)
      axios(RESETURL, {
          method: 'PUT',
          data: {
              new_password: payload.password,
              conf_new_password: payload.confirm_password,
              token:payload.token
          },
          headers: {
              "pp-token": `${token}`,
              "Content-type": "application/json"
          }
      })
      .then(res => {
          dispatch(resetSuccess(res));
          toast.success("Reset Success !")
          localStorage.setItem("token", token)
          history.push("/reset")
        //   history.push({
        //     pathname: '/login',
        //     state: { data: "kosong" }
        // });
      })
      .catch(err => {
          if (err.response.status === 400) {
              toast.error("incorrect username or password !")
          } else if (err.response.status === 401) {
              toast.error("password not match !")
          }
          dispatch(resetFailure(err));
      });
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
  
  