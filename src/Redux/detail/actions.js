import {
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILURE,
    GET_DONATION_DETAIL_SUCCESS,
    GET_DONATION_DETAIL_FAILURE,
} from '../actionTypes';
import axios from 'axios';
import { fetchRefreshToken } from '../token/action';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/transaction/`;
const URL_DONASI = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/`;


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
                dispatch(getDetailSuccess(res.data.data));
                if (res.data.data.is_rutin === true) {
                    dispatch(fetchDonationDetail(token, res.data.data.id_pp_cp_program_donasi_rutin))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(getDetailFailure(err));
                if(err.response.status === 401){
                    toast.error("Harap Login Terlebih Dahulu")
                    dispatch(fetchRefreshToken(token))
                    localStorage.removeItem("token");
                    history.push({
                        pathname: "/login",
                        state: { data: "kosong" },
                      });
                }
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
                dispatch(getDonationDetailSuccess(res.data.data));
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