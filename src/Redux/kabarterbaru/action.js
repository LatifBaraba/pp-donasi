import {
    GET_KABAR_TERBARU_OT,
    GET_KABAR_TERBARU_OT_SUCCESS,
    GET_KABAR_TERBARU_OT_FAILURE,
    GET_KABAR_TERBARU_RUTIN,
    GET_KABAR_TERBARU_RUTIN_SUCCESS,
    GET_KABAR_TERBARU_RUTIN_FAILURE,
} from '../actionTypes';
import axios from 'axios';
import { fetchRefreshToken } from '../token/action';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import history from '../../history'

// const URL = `${process.env.REACT_APP_BASE_URL}/transaction/my-list`;
const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/kabar-terbaru/list`;
const URL_RUTIN = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/kabar-terbaru/list`;

export function fetchKabarTerbaruOt(token, id) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                "limit": "10",
                "offset": "1",
                "filters": [
                    {
                        "field": "is_deleted",
                        "keyword": "false"
                    }, 
                    {
                        "field":"id_pp_cp_program_donasi",
                        "keyword":`${id}`
                    }
                ],
                "order": "created_at",
                "sort": "DESC",
                "created_at_from": "",
                "created_at_to": ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getKabarTerbaruOtSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getKabarTerbaruOtFailure(err));
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


export function fetchKabarTerbaruRutin(token, id) {
    return (dispatch) => {
        axios(URL_RUTIN, {
            method: 'POST',
            data: {
                "limit": "10",
                "offset": "1",
                "filters": [
                    {
                        "field": "is_deleted",
                        "keyword": "false"
                    }, 
                    {
                        "field":"id_pp_cp_program_donasi_rutin",
                        "keyword":`${id}`
                    }
                ],
                "order": "created_at",
                "sort": "DESC",
                "created_at_from": "",
                "created_at_to": ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getKabarTerbaruRutinSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getKabarTerbaruRutinFailure(err));
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

// Get Kabar Terbaru
const getKabarTerbaruOtSuccess = (payload) => ({
    type: GET_KABAR_TERBARU_OT_SUCCESS,
    payload
});

const getKabarTerbaruOtFailure = () => ({
    type: GET_KABAR_TERBARU_OT_FAILURE
});

const getKabarTerbaruOt = () => ({
    type: GET_KABAR_TERBARU_OT
});

// Get Kabar Terbaru Rutin
const getKabarTerbaruRutinSuccess = (payload) => ({
    type: GET_KABAR_TERBARU_RUTIN_SUCCESS,
    payload
});

const getKabarTerbaruRutinFailure = () => ({
    type: GET_KABAR_TERBARU_RUTIN_FAILURE
});

const getKabarTerbaruRutin = () => ({
    type: GET_KABAR_TERBARU_RUTIN
});