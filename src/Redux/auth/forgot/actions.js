import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE
} from "../../actionTypes";
// import axios from 'axios';

export function fetchForgot(payload) {  
  console.log(payload.email);
  return (dispatch) => {
    dispatch(changePasswordSuccess(payload));
  };
}

// Forgot
const changePasswordSuccess = (payload) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload,
});
