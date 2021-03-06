import { ORDER, ORDER_SUCCESS, ORDER_FAILURE } from "../actionTypes";
import axios from "axios";
import history from "../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRefreshToken } from "../token/action";

const ORDERURL = `${process.env.REACT_APP_BASE_URL}/transaction/create`;
// const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;

export function fetchOrder(token, payload) {
  return (dispatch) => {
    axios(ORDERURL, {
      method: "POST",
      data: {
        is_rutin: payload.is_rutin,
        is_fundraiser: false,
        id_pp_cp_program_donasi: payload.id_pp_cp_program_donasi,
        id_pp_cp_program_donasi_rutin: payload.id_pp_cp_program_donasi_rutin,
        amount: payload.amount,
        ucapan_dan_doa: payload.ucapan_dan_doa,
        is_anonymous: payload.is_anonymous,
        payment_method: payload.payment_method,
      },
      headers: {
        "pp-token": `${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        dispatch(orderSuccess(res));
        toast.success("Order Success !");
        localStorage.setItem("token", token);
        history.push("/confirm");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Order Tidak Berhasil");
        } else if(err.response.status === 401){
            toast.error("Harap Login Terlebih Dahulu")
            dispatch(fetchRefreshToken(token))
            localStorage.removeItem("token");
            history.push({
              pathname: "/login",
              state: { data: "kosong" },
            });
        }
        
        dispatch(orderFailure(err));
      });
  };
}

// Order
const order = () => ({
  type: ORDER,
});

const orderSuccess = (payload) => ({
  type: ORDER_SUCCESS,
  payload,
});

const orderFailure = () => ({
  type: ORDER_FAILURE,
});
