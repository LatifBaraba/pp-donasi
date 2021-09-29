import { GET_DONASI2,
    GET_DONASI2_SUCCESS,
    GET_DONASI2_FAILURE,
    GET_DONASISEO,
    GET_DONASISEO_SUCCESS,
    GET_DONASISEO_FAILURE,
        } from '../actionTypes';
import axios from 'axios';
import history from '../../history'

import { fetchDetailDonasiRutin, fetchHistoryRutinDonation } from "../detaildonasi/action";
import { fetchPaketPagedonasi2 } from "../pagelistdonasi2/actions";

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/list`;

export function fetchDonasilist2(token) {
    return (dispatch) => {        
        console.log(token)
        axios(URL, {
            method: 'POST',
            data: {
                limit: "5",
                offset: "0",
                filters: [
                    {
                        field: "is_show",
                        keyword: "true"
                    },
                    {
                        field: "is_deleted",
                        keyword: "false"
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                publish_at_from: "",
                publish_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getDonasilist2Success(res.data.data));
        })
        .catch(err => {
            dispatch(getDonasilist2Failure(err));
            console.log(err)
            if(err.response.status === 401){
                localStorage.removeItem("token");
                history.push('/dashboard')
            }
        });
    };
};

export function fetchDonasiRutinBySeo(token, url) {
    return (dispatch) => {        
        console.log('rutin seo ', token)
        axios(URL, {
            method: 'POST',
            data: {
                limit: "5",
                offset: "0",
                filters: [
                    {
                        field: "is_show",
                        keyword: "true"
                    },
                    {
                        field: "is_deleted",
                        keyword: "false"
                    },

                    {
                        field: "seo_url",
                        keyword: `${url}`
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                publish_at_from: "",
                publish_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getDonasiseoSuccess(res.data.data));
            // localStorage.setItem("id", JSON.stringify(res.data.data[0]))
            console.log('ini token dari detail donasi ')
            console.log('ini token dari detail donasi ', token)
            console.log(res)
            dispatch(fetchDetailDonasiRutin(token, res.data.data[0].id))
            dispatch(fetchHistoryRutinDonation(token, res.data.data[0].id))
            dispatch(fetchPaketPagedonasi2(token, res.data.data[0].id))
        })
        .catch(err => {
            dispatch(getDonasiseoFailure(err));
            console.log(err)
            if(err.response.status === 401){
                localStorage.removeItem("token");
                history.push('/dashboard')
            }
        });
    };
};

// Get Donasi List 2
const getDonasilist2Success = (payload) => ({
    type: GET_DONASI2_SUCCESS,
    payload
});

const getDonasilist2Failure = () => ({
    type: GET_DONASI2_FAILURE
});

const getDonasilist2 = () => ({
    type: GET_DONASI2
});

// Get Donasi List 2
const getDonasiseoSuccess = (payload) => ({
    type: GET_DONASISEO_SUCCESS,
    payload
});

const getDonasiseoFailure = () => ({
    type: GET_DONASISEO_FAILURE
});

const getDonasiseo = () => ({
    type: GET_DONASISEO
});