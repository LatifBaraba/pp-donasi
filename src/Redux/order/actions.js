import {
  ORDER,
  ORDER_SUCCESS,
  ORDER_FAILURE,
} from "../actionTypes";
import axios from "axios";
import history from "../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ORDERURL = `${process.env.REACT_APP_BASE_URL}/auth/user/order`;
// const LOGOUTURL = `${process.env.REACT_APP_BASE_URL}/auth/user/logout`;

export function fetchOrder(token, payload) {
  return (dispatch) => {
    console.log(payload)
    // axios(ORDERURL, {
    //     method: 'POST',
    //     data: {
    //         username: payload.username,
    //         password: payload.password
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
    //     history.push("/checkout")
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
