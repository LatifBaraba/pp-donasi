import { ORDER_FUNDRAISER, ORDER_FUNDRAISER_SUCCESS, ORDER_FUNDRAISER_FAILURE } from "../actionTypes";
import axios from "axios";
import history from "../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRefreshToken } from "../token/action";

const ORDERFUNDRAISERURL = `${process.env.REACT_APP_BASE_URL}/transaction/create`;
// const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;

export function fetchOrderFundraiser(token, payload) {
  return (dispatch) => {
    // console.log(payload)
    axios(ORDERFUNDRAISERURL, {
      method: "POST",
      data: {
        is_rutin: payload.is_rutin,
        is_fundraiser: payload.is_fundraiser,
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
        dispatch(orderFundraiserSuccess(res));
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
        dispatch(orderFundraiserFailure(err));
      });
  };
}

// Order
const orderFundraiser = () => ({
  type: ORDER_FUNDRAISER,
});

const orderFundraiserSuccess = (payload) => ({
  type: ORDER_FUNDRAISER_SUCCESS,
  payload,
});

const orderFundraiserFailure = () => ({
  type: ORDER_FUNDRAISER_FAILURE,
});
