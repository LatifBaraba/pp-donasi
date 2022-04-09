import {
    GET_DONASI,
    GET_DONASI_SUCCESS,
    GET_DONASI_FAILURE,
    GET_DONASIONETIMESEO,
    GET_DONASIONETIMESEO_SUCCESS,
    GET_DONASIONETIMESEO_FAILURE,
    GET_DONASIONETIME_SEARCH,
    GET_DONASIONETIME_SEARCH_SUCCESS,
    GET_DONASIONETIME_SEARCH_FAILURE,
    GET_KATEGORI_PROGRAM_DONASI,
    GET_KATEGORI_PROGRAM_DONASI_SUCCESS,
    GET_KATEGORI_PROGRAM_DONASI_FAILURE
} from '../actionTypes';

const initialState = {
    loading: false,
    donasilist: [],
    donasiseo: [],
    donasisearch: [],
    donasikategori: [],
    error: null
};

export default function donasilistReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DONASI:
            return {
                ...state,
                loading: true
            };
        case GET_DONASI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasilist: action.payload
            };
        case GET_DONASI_FAILURE:
            return {
                ...state,
                loading: false,
            };
            case GET_DONASIONETIMESEO:
                return {
                    ...state,
                    loading: true
                };
            case GET_DONASIONETIMESEO_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    donasiseo: action.payload
                };
            case GET_DONASIONETIMESEO_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
                
            case GET_DONASIONETIME_SEARCH:
                return {
                    ...state,
                    loading: true
                };
            case GET_DONASIONETIME_SEARCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    donasisearch: action.payload
                };
            case GET_DONASIONETIME_SEARCH_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
            case GET_KATEGORI_PROGRAM_DONASI:
                return {
                    ...state,
                    loading: true
                };
            case GET_KATEGORI_PROGRAM_DONASI_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    donasikategori: action.payload
                };
            case GET_KATEGORI_PROGRAM_DONASI_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
        default:
            return state;
    }
}