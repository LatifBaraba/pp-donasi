import { 
    ADD_CONFIRM,
    ADD_CONFIRM_SUCCESS,
    ADD_CONFIRM_FAILURE,    
  GET_CONFIRMLIST,
  GET_CONFIRMLIST_SUCCESS,
  GET_CONFIRMLIST_FAILURE
        } from '../actionTypes';

import axios from 'axios';
import { fetchToken, fetchRefreshToken } from "../token/action";
import history from "../../history";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const URL = `${process.env.REACT_APP_BASE_URL}/qris/list`;
// const EditURL = `${process.env.REACT_APP_BASE_URL}/qris/`;
const ORDERPAYURL = `${process.env.REACT_APP_BASE_URL}/transaction/pay`;
const ORDERLISTURL = `${process.env.REACT_APP_BASE_URL}/transaction/my-list`;

export function fetchAddConfirm(token, transaction_id, bukti) {
    return (dispatch) => {       
        // console.log(tipebayar, nama, norekening, tanggalbayar, nominal, newIcon) 
        dispatch(addConfirm())
        axios(ORDERPAYURL, {
            method: 'PUT',
            data: {
                transaction_id: transaction_id,
                image_url: bukti                
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            setTimeout(() => {
                toast.success("Konfirmasi Pembayaran Success !");
                dispatch(addConfirmSuccess(res));
                history.push("/thankyou");
            }, 1000);
        })
        .catch(err => {
            console.log(err)
            if(err.response.status == 401){
                toast.error("Harap Login Terlebih Dahulu")
                dispatch(fetchRefreshToken(token))
                localStorage.removeItem("token");
                history.push('/confirm')
            }
            dispatch(addConfirmFailure(err));
        });
    };
};

export function fetchConfirmList(token) {
    return (dispatch) => {        
        axios(ORDERLISTURL, {
            method: 'POST',
            data : {
                limit: "50",
                offset: "1",
                filters: [
                    {
                        field: "status",
                        keyword: "Unpaid"
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                paid_at_from: "",
                paid_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getConfirmListSuccess(res.data.data));
        })
        .catch(err => {
            dispatch(getConfirmListFailure(err));
            console.log(err)
            if(err.response.status === 401){
                toast.error("Harap Login Terlebih Dahulu")
                dispatch(fetchRefreshToken(token))
                localStorage.removeItem("token");
                history.push({
                    pathname: "/login",
                    state: { data: "kosong" },
                  });
            }
        });
    };
};

// Add Qris
const addConfirm = () => ({
    type: ADD_CONFIRM
});

const addConfirmSuccess = (payload) => ({
    type: ADD_CONFIRM_SUCCESS,
    payload
});

const addConfirmFailure = () => ({
    type: ADD_CONFIRM_FAILURE
});

const getConfirmList = () => ({
    type: GET_CONFIRMLIST
});

const getConfirmListSuccess = (payload) => ({
    type: GET_CONFIRMLIST_SUCCESS,
    payload
});

const getConfirmListFailure = () => ({
    type: GET_CONFIRMLIST_FAILURE
});