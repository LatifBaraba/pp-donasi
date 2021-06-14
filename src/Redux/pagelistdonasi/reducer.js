import {
    GET_PAGEDONASI,
    GET_PAGEDONASI_SUCCESS,
    GET_PAGEDONASI_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    pagedonasi: [],
    error: null
};

export default function pagedonasiReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PAGEDONASI:
            return {
                ...state,
                loading: true
            };
        case GET_PAGEDONASI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                pagedonasi: action.payload
            };
        case GET_PAGEDONASI_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}