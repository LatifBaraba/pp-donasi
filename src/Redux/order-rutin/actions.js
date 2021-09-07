import {
  ORDER_RUTIN,
  ORDER_RUTIN_SUCCESS,
  ORDER_RUTIN_FAILURE
} from "../actionTypes";
import axios from "axios";
import history from "../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ORDERURL = `${process.env.REACT_APP_BASE_URL}/transaction/create`;
// const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;

export function fetchOrderRutin(token, payload) {
  return (dispatch) => {
    // console.log(token)
    console.log(payload)
    axios(ORDERURL, {
        method: 'POST',
        data: {
            is_rutin:payload.is_rutin,
            id_pp_cp_program_donasi: payload.id_pp_cp_program_donasi,
            id_pp_cp_program_donasi_rutin: payload.id_pp_cp_program_donasi_rutin,
            amount: payload.amount,
            ucapan_dan_doa: payload.ucapan_dan_doa,
            is_anonymous: payload.is_anonymous,
            payment_method: payload.payment_method
        },
        headers: {
            "pp-token": `${token}`,
            "Content-type": "application/json"
        }
    })
    .then(res => {
        dispatch(orderRutinSuccess(res));
        toast.success("Order Success !")
        localStorage.setItem("token", token)
        history.push("/confirm")
    })
    .catch(err => {
        if (err.response.status === 400) {
            toast.error("Please Login First")
        } else if (err.response.status === 401) {
            toast.error("Please Login First")
        }
        dispatch(orderRutinFailure(err));
    });
};
}




// Order
const orderRutin = () => ({
  type: ORDER_RUTIN,
});

const orderRutinSuccess = (payload) => ({
  type: ORDER_RUTIN_SUCCESS,
  payload,
});

const orderRutinFailure = () => ({
  type: ORDER_RUTIN_FAILURE,
});
