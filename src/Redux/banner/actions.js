import { GET_BANNER,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
        } from '../actionTypes';
import axios from 'axios';
import history from '../../history'
import { fetchRefreshToken } from '../token/action';
const URL = `${process.env.REACT_APP_BASE_URL}/banner/list`;

export function fetchBanner(token) {
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
            dispatch(getBannerSuccess(res.data.data));
        })
        .catch(err => {
            dispatch(getBannerFailure(err));
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

// Get Banner
const getBannerSuccess = (payload) => ({
    type: GET_BANNER_SUCCESS,
    payload
});

const getBannerFailure = () => ({
    type: GET_BANNER_FAILURE
});

const getBanner = () => ({
    type: GET_BANNER
});