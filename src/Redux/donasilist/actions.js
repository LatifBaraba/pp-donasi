import { GET_DONASI,
    GET_DONASI_SUCCESS,
    GET_DONASI_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/donasi/list`;

export function fetchDonasilist(token) {
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
            dispatch(getDonasilistSuccess(res.data.data));
            console.log(res.data.data, 'donasilist')
        })
        .catch(err => {
            dispatch(getDonasilistFailure(err));
            console.log(err)
        });
    };
};

// Get Donasi List
const getDonasilistSuccess = (payload) => ({
    type: GET_DONASI_SUCCESS,
    payload
});

const getDonasilistFailure = () => ({
    type: GET_DONASI_FAILURE
});

const getDonasilist = () => ({
    type: GET_DONASI
});