import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../../actionTypes";
// import axios from 'axios';

export function fetchRegister(payload) {
  console.log(payload.nama_lengkap);
  console.log(payload.email);
  console.log(payload.password);
  console.log(payload.no_hp);
  return (dispatch) => {
    dispatch(addUserSuccess(payload));
  };
}

// Register User

const addUserSuccess = (payload) => ({
    type: ADD_USER_SUCCESS,
    payload
});
