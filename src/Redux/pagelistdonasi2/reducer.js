import {
    GET_PAGEDONASI2,
    GET_PAGEDONASI2_SUCCESS,
    GET_PAGEDONASI2_FAILURE,
    GET_PAKET_PAGEDONASI2,
    GET_PAKET_PAGEDONASI2_SUCCESS,
    GET_PAKET_PAGEDONASI2_FAILURE,
} from '../actionTypes';

const initialState = {
    loading: false,
    pagedonasi2: [],
    paketpagedonasi2: [],
    error: null
};

export default function pagedonasi2Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PAGEDONASI2:
            return {
                ...state,
                loading: true
            };
        case GET_PAGEDONASI2_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                pagedonasi2: action.payload
            };
        case GET_PAGEDONASI2_FAILURE:
            return {
                ...state,
                loading: false,
            };
            case GET_PAKET_PAGEDONASI2:
                return {
                    ...state,
                    loading: true
                };
            case GET_PAKET_PAGEDONASI2_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    paketpagedonasi2: action.payload
                };
            case GET_PAKET_PAGEDONASI2_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
        default:
            return state;
    }
}