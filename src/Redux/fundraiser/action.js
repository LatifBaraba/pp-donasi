import {
  GET_FUNDRAISER,
  GET_FUNDRAISER_SUCCESS,
  GET_FUNDRAISER_FAILURE,
  GET_ADD_FUNDRAISER,
  GET_ADD_FUNDRAISER_SUCCESS,
  GET_ADD_FUNDRAISER_FAILURE,
  GET_FUNDRAISER_BY_DONASI,
  GET_FUNDRAISER_BY_DONASI_SUCCESS,
  GET_FUNDRAISER_BY_DONASI_FAILURE,
} from "../actionTypes";
import axios from "axios";
import history from "../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRefreshToken } from "../token/action";

// const URL = `${process.env.REACT_APP_BASE_URL}/transaction/my-list`;
const URL = `${process.env.REACT_APP_BASE_URL}/fundraiser/list`;
const URL_ADD = `${process.env.REACT_APP_BASE_URL}/fundraiser/create/`;

export function fetchFundraiser(token, email) {
  return (dispatch) => {
    axios(URL, {
      method: "POST",
      data: {
        limit: "10",
        offset: "1",
        filters: [
          {
            field: "email",
            keyword: `${email}`,
          },
          {
            field: "is_deleted",
            keyword: "false",
          },
        ],
        order: "created_at",
        sort: "DESC",
        created_at_from: "",
        created_at_to: "",
        publish_at_from: "",
        publish_at_to: "",
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.data);
        dispatch(getFundraiserSuccess(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getFundraiserFailure(err));
      });
  };
}

export function fetchFundraiserByDonasi(token, id) {
  return (dispatch) => {
    axios(URL, {
      method: "POST",
      data: {
        limit: "10",
        offset: "1",
        filters: [
          {
            field: "id_pp_cp_program_donasi",
            keyword: `${id}`,
          },
          {
            field: "is_deleted",
            keyword: "false",
          },
        ],
        order: "created_at",
        sort: "DESC",
        created_at_from: "",
        created_at_to: "",
        publish_at_from: "",
        publish_at_to: "",
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.data);
        dispatch(getFundraiserByDonasiSuccess(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getFundraiserByDonasiFailure(err));
      });
  };
}

export function fetchAddFundraiser(token, payload) {
  return (dispatch) => {
    console.log(payload);
    console.log(token);
    axios(URL_ADD + `${payload.id_donasi}`, {
      method: "POST",
      data: {
        title: payload.title,
        sub_title: "",
        seo_url: payload.seo_url,
        target: parseInt(payload.target),
        description: "",
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        setTimeout(() => {
          toast.success("Berhasil Menjadi Penggalang Fundraiser !");
        }, 1000);
        dispatch(getAddFundraiserSuccess(res.data.data));
        history.push("/myfundraiser");
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getAddFundraiserFailure(err));
        if (err.response.status == 401) {
          toast.error("Silahkan Login terlebih dahulu");
          dispatch(fetchRefreshToken(token));
        }
      });
  };
}

// Get Fundraiser
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

// Get Fundraiser By Donasi
const getFundraiserByDonasiSuccess = (payload) => ({
  type: GET_FUNDRAISER_BY_DONASI_SUCCESS,
  payload,
});

const getFundraiserByDonasiFailure = () => ({
  type: GET_FUNDRAISER_BY_DONASI_FAILURE,
});

const getFundraiserByDonasi = () => ({
  type: GET_FUNDRAISER_BY_DONASI,
});

// Add Fundraiser
const getAddFundraiserSuccess = (payload) => ({
  type: GET_ADD_FUNDRAISER_SUCCESS,
  payload,
});

const getAddFundraiserFailure = () => ({
  type: GET_ADD_FUNDRAISER_FAILURE,
});

const getAddFundraiser = () => ({
  type: GET_ADD_FUNDRAISER,
});
