import {
    INPUT_RUTIN,
    INPUT_RUTIN_SUCCESS,
    INPUT_RUTIN_FAILURE
  } from "../actionTypes";
  // import axios from 'axios';
  
  export function fetchRutin(payload) {  
    return (dispatch) => {
      dispatch(rutinSuccess(payload));
    };
  }
  
  // Forgot
  const rutinSuccess = (payload) => ({
    type: INPUT_RUTIN_SUCCESS,
    payload,
  });
  