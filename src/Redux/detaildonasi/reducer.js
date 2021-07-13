import {
    GET_DONASI_DETAIL,
    GET_DONASI_DETAIL_SUCCESS,
    GET_DONASI_DETAIL_FAILURE,
    GET_DONASI_DETAIL_RUTIN,
    GET_DONASI_DETAIL_RUTIN_SUCCESS,
    GET_DONASI_DETAIL_RUTIN_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    detail: [],
    error: null
};

export default function donasiDetailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DONASI_DETAIL:
            return {
                ...state,
                loading: true
            };
        case GET_DONASI_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasilist: action.payload
            };
        case GET_DONASI_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_DONASI_DETAIL_RUTIN:
            return {
                ...state,
                loading: true
            };
        case GET_DONASI_DETAIL_RUTIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasilist: action.payload
            };
        case GET_DONASI_DETAIL_RUTIN_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}