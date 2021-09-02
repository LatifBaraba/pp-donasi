import { GET_PAGEDONASI2,
    GET_PAGEDONASI2_SUCCESS,
    GET_PAGEDONASI2_FAILURE,
    GET_PAKET_PAGEDONASI2,
    GET_PAKET_PAGEDONASI2_SUCCESS,
    GET_PAKET_PAGEDONASI2_FAILURE,
        } from '../actionTypes';
import axios from 'axios';
import history from '../../history'

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
                localStorage.removeItem("token");
                history.push('/login')
            }
        });
    };
};


export function fetchPaketPagedonasi2(token, id) {
    return (dispatch) => {
        console.log(token)
        console.log(id)
        axios(ListPaketURL, {
            method: 'POST',
            data: {
                limit: "10",
                offset: "0",
                filters: [
                   
                    {
                        field: "id_pp_cp_program_donasi_rutin",
                        keyword: `${id}`
                    }
                    // {
                    //     field: "is_deleted",
                    //     keyword: "false"
                    // }
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
            console.log(res.data.data)
            dispatch(getPaketPagedonasi2Success(res.data.data));
        })
        .catch(err => {
            dispatch(getPaketPagedonasi2Failure(err));
            console.log(err)
            if(err.response.status === 401){
                localStorage.removeItem("token");
                history.push('/login')
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