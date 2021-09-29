import { 
    GET_DETAIL_DONASI,
    GET_DETAIL_DONASI_SUCCESS,
    GET_DETAIL_DONASI_FAILURE,
    GET_DETAIL_DONASI_RUTIN,
    GET_DETAIL_DONASI_RUTIN_SUCCESS,
    GET_DETAIL_DONASI_RUTIN_FAILURE,
    GET_HISTORY_DONATION,
    GET_HISTORY_DONATION_SUCCESS,
    GET_HISTORY_DONATION_FAILURE,  
    GET_ALL_HISTORY_DONATION,
    GET_ALL_HISTORY_DONATION_SUCCESS,
    GET_ALL_HISTORY_DONATION_FAILURE,  
    GET_DETAIL_PAKET_DONASI_RUTIN,
    GET_DETAIL_PAKET_DONASI_RUTIN_SUCCESS,
    GET_DETAIL_PAKET_DONASI_RUTIN_FAILURE,
    GET_PAKET_RUTIN_HISTORY_DONATION,
    GET_PAKET_RUTIN_HISTORY_DONATION_SUCCESS,
    GET_PAKET_RUTIN_HISTORY_DONATION_FAILURE,  
    GET_ALL_PAKET_RUTIN_HISTORY_DONATION,
    GET_ALL_PAKET_RUTIN_HISTORY_DONATION_SUCCESS,
    GET_ALL_PAKET_RUTIN_HISTORY_DONATION_FAILURE,  
    } from '../actionTypes';
import axios from 'axios';
import history from '../../history'
import {fetchRefreshToken } from "../../Redux/token/action";

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/`;
const URL_RUTIN = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/`;
const URL_HISTORY = `${process.env.REACT_APP_BASE_URL}/transaction/list`;
const URL_PAKET = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/paket/`;

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
        })
        .catch(err => {
            dispatch(getDonasiDetailFailure(err));
            console.log(err)
        });
    };
};

export function fetchDetailDonasiRutin(token, id) {
    return (dispatch) => {    
        console.log("masuk detail donasi rutin")    
        axios(URL_RUTIN+`${id}`, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getDetailDonasiRutinSuccess(res.data.data));
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


export function fetchDetailDonasiRutinPaket(token, id) {
    return (dispatch) => {        
        console.log(id)
        axios(URL_PAKET+`${id}`, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getDetailDonasiRutinPaketSuccess(res.data.data));
        })
        .catch(err => {
            dispatch(getDetailDonasiRutinPaketFailure(err));
            console.log(err)
            if(err.response.status === 401){
                localStorage.removeItem("token");
                history.push('/login')
            }
        });
    };
};

export function fetchHistoryDonation(token, id) {
    return (dispatch) => {
        console.log('masuk redux')
        
        axios(URL_HISTORY, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "1",
                filters: [
                    {
                        field: "id_pp_cp_program_donasi",
                        keyword: `${id}`
                    },
                    {
                        field: "status",
                        keyword: "Paid"
                    },
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                paid_at_from: "",
                paid_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getHistoryDonationSuccess(res.data.data));
            console.log(res.data.data)
        })
        .catch(err => {
            if(err.response.status == 401){
                // toast.error("Unauthorized")
                dispatch(fetchRefreshToken(token))
                localStorage.removeItem("token");
                history.push('/transaction')
            }
            dispatch(getHistoryDonationFailure(err));
        });
    };
};


export function fetchHistoryRutinDonation(token, id) {
    return (dispatch) => {
        console.log('masuk redux')
        
        axios(URL_HISTORY, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "1",
                filters: [
                    {
                        field: "id_pp_cp_program_donasi_rutin",
                        keyword: `${id}`
                    },
                    {
                        field: "status",
                        keyword: "Paid"
                    },
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                paid_at_from: "",
                paid_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getHistoryPaketDonationSuccess(res.data.data));
            console.log(res.data.data)
        })
        .catch(err => {
            if(err.response.status == 401){
                // toast.error("Unauthorized")
                dispatch(fetchRefreshToken(token))
                localStorage.removeItem("token");
                history.push('/transaction')
            }
            dispatch(getHistoryPaketDonationFailure(err));
        });
    };
};

export function fetchAllHistoryDonation(token) {
    return (dispatch) => {
        console.log('masuk redux')
        axios(URL_HISTORY, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "1",
                filters: [  
                    {
                        field: "is_rutin",
                        keyword: "false"
                    },                                  
                    {
                        field: "status",
                        keyword: "Paid"
                    },
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                paid_at_from: "",
                paid_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getAllHistoryDonationSuccess(res.data.data));
            console.log(res.data.data)
        })
        .catch(err => {
            if(err.response.status == 401){
                // toast.error("Unauthorized")
                dispatch(fetchRefreshToken(token))
                localStorage.removeItem("token");
                history.push('/dashboard')
            }
            dispatch(getAllHistoryDonationFailure(err));
        });
    };
};


export function fetchAllHistoryRutinDonation(token) {
    return (dispatch) => {
        console.log('masuk redux')
        axios(URL_HISTORY, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "1",
                filters: [     
                    {
                        field: "is_rutin",
                        keyword: "true"
                    },  
                    {
                        field: "status",
                        keyword: "Paid"
                    },
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                paid_at_from: "",
                paid_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getAllRutinPaketHistoryDonationSuccess(res.data.data));
            console.log(res.data.data)
        })
        .catch(err => {
            if(err.response.status == 401){
                // toast.error("Unauthorized")
                dispatch(fetchRefreshToken(token))
                localStorage.removeItem("token");
                history.push('/dashboard')
            }
            dispatch(getAllRutinPaketHistoryDonationFailure(err));
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

// Get History Donate
const getHistoryDonationSuccess = (payload) => ({
    type: GET_HISTORY_DONATION_SUCCESS,
    payload
});

const getHistoryDonationFailure = () => ({
    type: GET_HISTORY_DONATION_FAILURE
});

// Get All History Donate
const getAllHistoryDonationSuccess = (payload) => ({
    type: GET_ALL_HISTORY_DONATION_SUCCESS,
    payload
});

const getAllHistoryDonationFailure = () => ({
    type: GET_ALL_HISTORY_DONATION_FAILURE
});

//Get Paket Detail Donasi Rutin
const getDetailDonasiRutinPaket = () => ({
    type: GET_DETAIL_PAKET_DONASI_RUTIN
});

const getDetailDonasiRutinPaketSuccess = (payload) => ({
    type: GET_DETAIL_PAKET_DONASI_RUTIN_SUCCESS,
    payload
});

const getDetailDonasiRutinPaketFailure = () => ({
    type: GET_DETAIL_PAKET_DONASI_RUTIN_FAILURE
});

// Get All Rutin History Donate
const getAllRutinPaketHistoryDonationSuccess = (payload) => ({
    type: GET_ALL_PAKET_RUTIN_HISTORY_DONATION_SUCCESS,
    payload
});

const getAllRutinPaketHistoryDonationFailure = () => ({
    type: GET_ALL_PAKET_RUTIN_HISTORY_DONATION_FAILURE
});

// Get History Donate
const getHistoryPaketDonationSuccess = (payload) => ({
    type: GET_PAKET_RUTIN_HISTORY_DONATION_SUCCESS,
    payload
});

const getHistoryPaketDonationFailure = () => ({
    type: GET_PAKET_RUTIN_HISTORY_DONATION_FAILURE
});