import {
    GET_DONASI2,
    GET_DONASI2_SUCCESS,
    GET_DONASI2_FAILURE,
    GET_DONASISEO,
    GET_DONASISEO_SUCCESS,
    GET_DONASISEO_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    donasilist2: [],
    donasiseo: [],
    error: null
};

export default function donasilist2Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DONASI2:
            return {
                ...state,
                loading: true
            };
        case GET_DONASI2_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasilist2: action.payload
            };
        case GET_DONASI2_FAILURE:
            return {
                ...state,
                loading: false,
            };
            case GET_DONASISEO:
                return {
                    ...state,
                    loading: true
                };
            case GET_DONASISEO_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    donasiseo: action.payload
                };
            case GET_DONASISEO_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
        default:
            return state;
    }
}