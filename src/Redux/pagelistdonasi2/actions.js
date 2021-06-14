import { GET_PAGEDONASI2,
    GET_PAGEDONASI2_SUCCESS,
    GET_PAGEDONASI2_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/pagedonasi/list2`;

export function fetchPagedonasi2(token) {
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
            dispatch(getPagedonasi2Success(res.data.data));
            console.log(res.data.data, 'pagedonasi')
        })
        .catch(err => {
            dispatch(getPagedonasi2Failure(err));
            console.log(err)
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