import {
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILURE,
    GET_DONATION_DETAIL_SUCCESS,
    GET_DONATION_DETAIL_FAILURE,
} from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/transaction/`;
const URL_DONASI = `${process.env.REACT_APP_BASE_URL}/program-donasi/`;


export function fetchDetail(token, id) {
    return (dispatch) => {
        axios(URL + id, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                console.log(res.data)
                dispatch(getDetailSuccess(res.data.data));
                console.log(res.data.data, 'detail')
            })
            .catch(err => {
                console.log(err)
                dispatch(getDetailFailure(err));
            });
    };
};

export function fetchDonationDetail(token, id) {
    return (dispatch) => {
        axios(URL_DONASI + id, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                console.log(res.data)
                dispatch(getDonationDetailSuccess(res.data.data));
                console.log(res.data.data, 'detaildonasi_donasi')
            })
            .catch(err => {
                console.log(err)
                dispatch(getDonationDetailFailure(err));
            });
    };
};

// Get Detail
const getDetailSuccess = (payload) => ({
    type: GET_DETAIL_SUCCESS,
    payload
});

const getDetailFailure = () => ({
    type: GET_DETAIL_FAILURE
});
const getDonationDetailSuccess = (payload) => ({
    type: GET_DONATION_DETAIL_SUCCESS,
    payload
});

const getDonationDetailFailure = () => ({
    type: GET_DONATION_DETAIL_FAILURE
});

const getDetail = () => ({
    type: GET_DETAIL
});