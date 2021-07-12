import { GET_DONASI2,
    GET_DONASI2_SUCCESS,
    GET_DONASI2_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/list`;

export function fetchDonasilist2(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "3",
                offset: "1",
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
            console.log(res.data.data, 'donasilist2')
        })
        .catch(err => {
            dispatch(getDonasilist2Failure(err));
            console.log(err)
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