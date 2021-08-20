import {
    GET_DETAIL_DONASI,
    GET_DETAIL_DONASI_SUCCESS,
    GET_DETAIL_DONASI_FAILURE,
    GET_DETAIL_DONASI_RUTIN,
    GET_DETAIL_DONASI_RUTIN_SUCCESS,
    GET_DETAIL_DONASI_RUTIN_FAILURE,
    GET_HISTORY_DONATION,
    GET_HISTORY_DONATION_SUCCESS,
    GET_HISTORY_DONATION_FAILURE,  
    GET_ALL_HISTORY_DONATION,
    GET_ALL_HISTORY_DONATION_SUCCESS,
    GET_ALL_HISTORY_DONATION_FAILURE,  
} from '../actionTypes';

const initialState = {
    loading: false,
    donasiDetail: [],
    historydata: [],
    allhistorydata: [],
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
            case GET_HISTORY_DONATION:
                return {
                    ...state,
                    loading: false
                };
            case GET_HISTORY_DONATION_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    historydata: action.payload
                };
            case GET_HISTORY_DONATION_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
                case GET_ALL_HISTORY_DONATION:
                return {
                    ...state,
                    loading: false
                };
            case GET_ALL_HISTORY_DONATION_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    allhistorydata: action.payload
                };
            case GET_ALL_HISTORY_DONATION_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
        default:
            return state;
    }
}