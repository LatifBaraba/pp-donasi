import { GET_PAGEDONASI2,
    GET_PAGEDONASI2_SUCCESS,
    GET_PAGEDONASI2_FAILURE,
    GET_PAKET_PAGEDONASI2,
    GET_PAKET_PAGEDONASI2_SUCCESS,
    GET_PAKET_PAGEDONASI2_FAILURE,
        } from '../actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import history from '../../history'
import { fetchRefreshToken } from '../token/action';

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/list`;
const ListPaketURL = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/paket/list`;

export function fetchPagedonasi2(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "100",
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
            dispatch(getPagedonasi2Success(res.data.data));
        })
        .catch(err => {
            dispatch(getPagedonasi2Failure(err));
            console.log(err)
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


export function fetchPaketPagedonasi2(token, id) {
    return (dispatch) => {
        axios(ListPaketURL, {
            method: 'POST',
            data: {
                limit: "10",
                offset: "0",
                filters: [
                   
                    {
                        field: "id_pp_cp_program_donasi_rutin",
                        keyword: `${id}`
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
            dispatch(getPaketPagedonasi2Success(res.data.data));
        })
        .catch(err => {
            dispatch(getPaketPagedonasi2Failure(err));
            console.log(err)
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

// Get Donasi List
const getPagedonasi2Success = (payload) => ({
    type: GET_PAGEDONASI2_SUCCESS,
    payload
});

const getPagedonasi2Failure = () => ({
    type: GET_PAGEDONASI2_FAILURE
});

const getPagedonasi2 = () => ({
    type: GET_PAGEDONASI2   
});

// Get Paket Donasi List
const getPaketPagedonasi2Success = (payload) => ({
    type: GET_PAKET_PAGEDONASI2_SUCCESS,
    payload
});

const getPaketPagedonasi2Failure = () => ({
    type: GET_PAKET_PAGEDONASI2_FAILURE
});

const getPaketPagedonasi2 = () => ({
    type: GET_PAKET_PAGEDONASI2   
});