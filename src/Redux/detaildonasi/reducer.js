import {
    GET_DETAIL_DONASI,
    GET_DETAIL_DONASI_SUCCESS,
    GET_DETAIL_DONASI_FAILURE,
    GET_DETAIL_DONASI_RUTIN,
    GET_DETAIL_DONASI_RUTIN_SUCCESS,
    GET_DETAIL_DONASI_RUTIN_FAILURE,
} from '../actionTypes';

const initialState = {
    loading: false,
    donasiDetail: [],
    error: null
};

export default function donasiDetailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DETAIL_DONASI:
            return {
                ...state,
                loading: true
            };
        case GET_DETAIL_DONASI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasiDetail: action.payload
            };
        case GET_DETAIL_DONASI_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_DETAIL_DONASI_RUTIN:
            return {
                ...state,
                loading: true
            };
        case GET_DETAIL_DONASI_RUTIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasiDetail: action.payload
            };
        case GET_DETAIL_DONASI_RUTIN_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}