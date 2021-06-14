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

// Login
const login = () => ({
    type: LOGIN
});

const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

const loginFailure = () => ({
    type: LOGIN_FAILURE
});

// Logout
const logout = () => ({
    type: LOGOUT
});

const logoutSuccess = (payload) => ({
    type: LOGOUT_SUCCESS,
    payload
});

const logoutFailure = () => ({
    type: LOGOUT_FAILURE
});