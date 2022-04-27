import {
    GET_HISTORY,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE,
} from '../actionTypes';
import axios from 'axios';
import { fetchRefreshToken } from '../token/action';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/transaction/my-list`;

export function fetchHistory(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                "limit": "100",
                "offset": "1",
                "filters": [
                    {
                        "field": "id",
                        "keyword": ""
                    }
                ],
                "order": "created_at",
                "sort": "ASC",
                "created_at_from": "",
                "created_at_to": "",
                "paid_at_from": "",
                "paid_at_to": ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getHistorySuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getHistoryFailure(err));
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

// Get Kategori
const getHistorySuccess = (payload) => ({
    type: GET_HISTORY_SUCCESS,
    payload
});

const getHistoryFailure = () => ({
    type: GET_HISTORY_FAILURE
});

const getHistory = () => ({
    type: GET_HISTORY
});