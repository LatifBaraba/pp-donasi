import {
  GET_DONASI,
  GET_DONASI_SUCCESS,
  GET_DONASI_FAILURE,
  GET_DONASIONETIMESEO,
  GET_DONASIONETIMESEO_SUCCESS,
  GET_DONASIONETIMESEO_FAILURE,
} from "../actionTypes";
import axios from "axios";
import history from "../../history";
import {
  fetchDetailDonasi,
  fetchHistoryDonation,
} from "../detaildonasi/action";
import { fetchKabarTerbaruOt } from "../kabarterbaru/action"

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/list`;

export function fetchDonasilist(token) {
  return (dispatch) => {        
    axios(URL, {
      method: "POST",
      data: {
        limit: "22",
        offset: "0",
        filters: [
          {
            field: "is_show",
            keyword: "true",
          },
          {
            field: "is_deleted",
            keyword: "false",
          },
          
        ],
        order: "created_at",
        sort: "ASC",
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
        dispatch(getDonasilistSuccess(res.data.data));
        res.data.data.forEach((element) => {
          let percent =
            parseInt((element.donation_collect / element.target) * 100) > 100
              ? 100
              : parseInt((element.donation_collect / element.target) * 100);
          localStorage.setItem("percent" + element.id, percent);          
        });
        dispatch(getDonasilistSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getDonasilistFailure(err));
        console.log(err);
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          history.push("/dashboard");
        }
      });
  };
}


export function fetchDonasiOneTimeBySeo(token, url) {
  return (dispatch) => {        
    axios(URL, {
      method: "POST",
      data: {
        limit: "22",
        offset: "0",
        filters: [
          {
            field: "is_show",
            keyword: "true",
          },
          {
            field: "is_deleted",
            keyword: "false",
          },
          {
            field: "seo_url",
            keyword: `${url}`
        }
        ],
        order: "created_at",
        sort: "ASC",
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
        dispatch(getDonasionetimeseoSuccess(res.data.data));
        res.data.data.forEach((element) => {
          let percent =
            parseInt((element.donation_collect / element.target) * 100) > 100
              ? 100
              : parseInt((element.donation_collect / element.target) * 100);
          localStorage.setItem("percent" + element.id, percent);          
        });
        dispatch(getDonasionetimeseoSuccess(res.data.data));
        dispatch(fetchDetailDonasi(token, res.data.data[0].id));
        dispatch(fetchHistoryDonation(token, res.data.data[0].id))
        dispatch(fetchKabarTerbaruOt(token, res.data.data[0].id))
      })
      .catch((err) => {
        dispatch(getDonasionetimeseoFailure(err));
        console.log(err);
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          history.push("/dashboard");
        }
      });
  };
}

// Get Donasi List
const getDonasilistSuccess = (payload) => ({
  type: GET_DONASI_SUCCESS,
  payload,
});

const getDonasilistFailure = () => ({
  type: GET_DONASI_FAILURE,
});

const getDonasilist = () => ({
  type: GET_DONASI,
});


// Get Donasi List
const getDonasionetimeseoSuccess = (payload) => ({
  type: GET_DONASIONETIMESEO_SUCCESS,
  payload,
});

const getDonasionetimeseoFailure = () => ({
  type: GET_DONASIONETIMESEO_FAILURE,
});

const getDonasionetimeseo = () => ({
  type: GET_DONASIONETIMESEO,
});