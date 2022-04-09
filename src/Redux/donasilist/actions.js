import {
  GET_DONASI,
  GET_DONASI_SUCCESS,
  GET_DONASI_FAILURE,
  GET_DONASIONETIMESEO,
  GET_DONASIONETIMESEO_SUCCESS,
  GET_DONASIONETIMESEO_FAILURE,
  GET_DONASIONETIME_SEARCH,
  GET_DONASIONETIME_SEARCH_SUCCESS,
  GET_DONASIONETIME_SEARCH_FAILURE,
  GET_KATEGORI_PROGRAM_DONASI,
  GET_KATEGORI_PROGRAM_DONASI_SUCCESS,
  GET_KATEGORI_PROGRAM_DONASI_FAILURE
} from "../actionTypes";
import axios from "axios";
import history from "../../history";
import {
  fetchDetailDonasi,
  fetchHistoryDonation,
} from "../detaildonasi/action";
import { fetchKabarTerbaruOt } from "../kabarterbaru/action";

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/list`;
const URL_KATEGORI = `${process.env.REACT_APP_BASE_URL}/kategori-program-donasi/list`;

export function fetchDonasilist(token, kategori_name) {
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
            field: "kategori_name",
            keyword: `${kategori_name}`,
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
            keyword: `${url}`,
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
        dispatch(fetchHistoryDonation(token, res.data.data[0].id));
        dispatch(fetchKabarTerbaruOt(token, res.data.data[0].id));
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

export function fetchDonasiSearch(token, keywordSearch) {
  return (dispatch) => {
    // console.log(token)
    // console.log(keywordSearch)
    axios(URL, {
      method: "POST",
      data: {
        limit: "10",
        offset: "1",
        filters: [
          {
            field: "title",
            keyword: `${keywordSearch}`,
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
        dispatch(getDonasionetimesearchSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getDonasionetimesearchFailure(err));
        console.log(err);
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          history.push("/dashboard");
        }
      });
  };
}


export function fetchKategoriProgramDonasi(token) {
  return (dispatch) => {
    // console.log(token)
    // console.log(keywordSearch)
    axios(URL_KATEGORI, {
      method: "POST",
      data: {
        limit: "10",
        offset: "1",
        filters: [
            {
                field: "id",
                keyword: ""
            }
        ],
        order: "created_at",
        sort: "ASC",
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        dispatch(getKategoriProgramDonasiSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getKategoriProgramDonasiFailure(err));
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

// Get Donasi List
const getDonasionetimesearchSuccess = (payload) => ({
  type: GET_DONASIONETIME_SEARCH_SUCCESS,
  payload,
});

const getDonasionetimesearchFailure = () => ({
  type: GET_DONASIONETIME_SEARCH_FAILURE,
});

const getDonasionetimesearch = () => ({
  type: GET_DONASIONETIME_SEARCH,
});

// Get Program Donasi List
const getKategoriProgramDonasiSuccess = (payload) => ({
  type: GET_KATEGORI_PROGRAM_DONASI_SUCCESS,
  payload,
});

const getKategoriProgramDonasiFailure = () => ({
  type: GET_KATEGORI_PROGRAM_DONASI_FAILURE,
});

const getKategoriProgramDonasi = () => ({
  type: GET_KATEGORI_PROGRAM_DONASI,
});
