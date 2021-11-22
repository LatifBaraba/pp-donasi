import {
  GET_FUNDRAISER,
  GET_FUNDRAISER_SUCCESS,
  GET_FUNDRAISER_FAILURE,
} from "../actionTypes";
import axios from "axios";

// const URL = `${process.env.REACT_APP_BASE_URL}/transaction/my-list`;
const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/kabar-terbaru/list`;
const URL_RUTIN = `${process.env.REACT_APP_BASE_URL}/program-donasi-rutin/kabar-terbaru/list`;

export function fetchFundraiser(token, payload) {
  return (dispatch) => {
      console.log(payload)
    // axios(URL, {
    //     method: 'POST',
    //     data: {
    //         "limit": "10",
    //         "offset": "1",
    //         "filters": [
    //             {
    //                 "field": "is_deleted",
    //                 "keyword": "false"
    //             },
    //             {
    //                 "field":"id_pp_cp_program_donasi",
    //                 "keyword":`${id}`
    //             }
    //         ],
    //         "order": "created_at",
    //         "sort": "DESC",
    //         "created_at_from": "",
    //         "created_at_to": ""
    //     },
    //     headers: {
    //         "pp-token": `${token}`,
    //         "Content-type": "application/json"
    //     }
    // })
    //     .then(res => {
    //         dispatch(getFundraiserSuccess(res.data.data));
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         dispatch(getFundraiserFailure(err));
    //     });
  };
}

// Get Kabar Terbaru
const getFundraiserSuccess = (payload) => ({
  type: GET_FUNDRAISER_SUCCESS,
  payload,
});

const getFundraiserFailure = () => ({
  type: GET_FUNDRAISER_FAILURE,
});

const getFundraiser = () => ({
  type: GET_FUNDRAISER,
});
