import { 
    GET_DETAIL_DONASI,
    GET_DETAIL_DONASI_SUCCESS,
    GET_DETAIL_DONASI_FAILURE,
    GET_DETAIL_DONASI_RUTIN,
    GET_DETAIL_DONASI_RUTIN_SUCCESS,
    GET_DETAIL_DONASI_RUTIN_FAILURE,
    } from '../actionTypes';
import axios from 'axios';
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/`;
const URL_RUTIN = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/`;

export function fetchDetailDonasi(token, id) {
    return (dispatch) => {
        axios(URL+`${id}`, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getDonasiDetailSuccess(res.data.data));
            console.log(res.data.data, 'donasi detail')
        })
        .catch(err => {
            dispatch(getDonasiDetailFailure(err));
            console.log(err)
        });
    };
};

export function fetchDetailDonasiRutin(token, id) {
    return (dispatch) => {        
        axios(URL_RUTIN+`${id}`, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getDetailDonasiRutinSuccess(res.data.data));
            console.log(res.data.data, 'donasi detail rutin')
        })
        .catch(err => {
            dispatch(getDetailDonasiRutinFailure(err));
            console.log(err)
            if(err.response.status === 401){
                localStorage.removeItem("token");
                history.push('/login')
            }
        });
    };
};

// Get Donasi List
const getDetailDonasi = () => ({
    type: GET_DETAIL_DONASI
});

const getDonasiDetailSuccess = (payload) => ({
    type: GET_DETAIL_DONASI_SUCCESS,
    payload
});

const getDonasiDetailFailure = () => ({
    type: GET_DETAIL_DONASI_FAILURE
});

const getDetailDonasiRutin = () => ({
    type: GET_DETAIL_DONASI_RUTIN
});

const getDetailDonasiRutinSuccess = (payload) => ({
    type: GET_DETAIL_DONASI_RUTIN_SUCCESS,
    payload
});

const getDetailDonasiRutinFailure = () => ({
    type: GET_DETAIL_DONASI_RUTIN_FAILURE
});