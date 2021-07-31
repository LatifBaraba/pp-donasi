import { 
    ADD_CONFIRM,
    ADD_CONFIRM_SUCCESS,
    ADD_CONFIRM_FAILURE    
        } from '../actionTypes';

import axios from 'axios';
import { fetchToken, fetchRefreshToken } from "../token/action";
import history from "../../history";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const URL = `${process.env.REACT_APP_BASE_URL}/qris/list`;
// const EditURL = `${process.env.REACT_APP_BASE_URL}/qris/`;
const AddURL = `${process.env.REACT_APP_BASE_URL}/confirm/create`;

export function fetchAddConfirm(token, tipebayar, nama, norekening, tanggalbayar, nominal, newIcon) {
    return (dispatch) => {       
        console.log(tipebayar, nama, norekening, tanggalbayar, nominal, newIcon) 
        // dispatch(addConfirm())
        // axios(AddURL, {
        //     method: 'POST',
        //     data: {
        //         tipebayar: title,
        //         nama: description,
        //         norekening: norekening
        //         tanggalbayar: tanggalbayar
        //         nominal: nominal
        //         newIcon: newIcon
        //     },
        //     headers: {
        //         "pp-token": `${token}`,
        //         "Content-type": "application/json"
        //     }
        // })
        // .then(res => {
        //     setTimeout(() => {
        //         toast.success("Add Success !");
        //         dispatch(addConfirmSuccess(res));
                history.push("/dashboard");
        //     }, 2000);
        // })
        // .catch(err => {
        //     console.log(err)
        //     if(err.response.status == 401){
        //         toast.error("Unauthorized")
        //         dispatch(fetchRefreshToken(token))
        //         localStorage.removeItem("token");
        //         history.push('/confirm')
        //     }
        //     dispatch(addConfirmFailure(err));
        // });
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

