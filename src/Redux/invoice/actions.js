import {
  INVOICE,
  INVOICE_SUCCESS,
  INVOICE_FAILURE
} from "../actionTypes";
import axios from "axios";
import history from "../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const INVOICEURL = `${process.env.REACT_APP_BASE_URL}/transaction/create`;
// const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;

export function fetchInvoice(token, payload) {
  return (dispatch) => {
    console.log("masuk fetch invoice")
    // axios(INVOICEURL, {
    //     method: 'POST',
    //     data: {
    //         is_rutin:payload.is_rutin,
    //         id_pp_cp_program_donasi: payload.id_pp_cp_program_donasi,
    //         id_pp_cp_program_donasi_rutin: payload.id_pp_cp_program_donasi_rutin,
    //         amount: payload.amount,
    //         payment_method: payload.payment_method
    //     },
    //     headers: {
    //         "pp-token": `${token}`,
    //         "Content-type": "application/json"
    //     }
    // })
    // .then(res => {
    //     dispatch(orderSuccess(res));
    //     toast.success("Order Success !")
    //     localStorage.setItem("token", token)
    //     history.push("/confirm")
    // })
    // .catch(err => {
    //     if (err.response.status === 400) {
    //         toast.error("Order unsuccessful")
    //     } else if (err.response.status === 401) {
    //         toast.error("Order unsuccessful !")
    //     }
    //     dispatch(orderFailure(err));
    // });
};
}




// Order
const invoice = () => ({
  type: INVOICE,
});

const invoiceSuccess = (payload) => ({
  type: INVOICE_SUCCESS,
  payload,
});

const invoiceFailure = () => ({
  type: INVOICE_FAILURE,
});
