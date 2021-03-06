import { GET_PAGEDONASI,
    GET_PAGEDONASI_SUCCESS,
    GET_PAGEDONASI_FAILURE,
        } from '../actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import history from '../../history'
import { fetchRefreshToken } from '../token/action';

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/list`;

export function fetchPageDonasi(token) {
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
            dispatch(getPageDonasiSuccess(res.data.data));
        })
        .catch(err => {
            dispatch(getPageDonasiFailure(err));
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
const getPageDonasiSuccess = (payload) => ({
    type: GET_PAGEDONASI_SUCCESS,
    payload
});

const getPageDonasiFailure = () => ({
    type: GET_PAGEDONASI_FAILURE
});

const getPageDonasi = () => ({
    type: GET_PAGEDONASI
});