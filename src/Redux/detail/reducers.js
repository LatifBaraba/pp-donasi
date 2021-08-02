import {
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILURE,
    GET_DONATION_DETAIL_SUCCESS,
    GET_DONATION_DETAIL_FAILURE,

} from '../actionTypes';

const initialState = {
    loading: false,
    detail: [],
    detaildonation: [],
    error: null
};

export default function detailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DETAIL:
            return {
                ...state,
                loading: true
            };
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                detail: action.payload
            };
        case GET_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_DONATION_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                detaildonation: action.payload
            };
        case GET_DONATION_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}