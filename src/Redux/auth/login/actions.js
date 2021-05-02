import { 
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
        } from '../../actionTypes';
// import axios from 'axios';

export function fetchLogin(payload) {
    console.log(payload.email)
    console.log(payload.password)
    return (dispatch) => {
            dispatch(loginSuccess(payload));        
    };
};

const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});
