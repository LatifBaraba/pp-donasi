import {
  GET_DONASI,
  GET_DONASI_SUCCESS,
  GET_DONASI_FAILURE,
} from "../actionTypes";
import axios from "axios";
import history from "../../history";

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/list`;

export function fetchDonasilist(token) {
  return (dispatch) => {        
    console.log(token)
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
