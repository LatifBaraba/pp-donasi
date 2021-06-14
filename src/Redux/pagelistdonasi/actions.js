import { GET_PAGEDONASI,
    GET_PAGEDONASI_SUCCESS,
    GET_PAGEDONASI_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/pagedonasi/list`;

export function fetchPagedonasi(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "0",
                filters: [
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
            dispatch(getPagedonasiSuccess(res.data.data));
            console.log(res.data.data, 'pagedonasi')
        })
        .catch(err => {
            dispatch(getPagedonasiFailure(err));
            console.log(err)
        });
    };
};

// Get Donasi List
const getPagedonasiSuccess = (payload) => ({
    type: GET_PAGEDONASI_SUCCESS,
    payload
});

const getPagedonasiFailure = () => ({
    type: GET_PAGEDONASI_FAILURE
});

const getPagedonasi = () => ({
    type: GET_PAGEDONASI
});