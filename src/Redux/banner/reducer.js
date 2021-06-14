import {
    GET_BANNER,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    banner: [],
    error: null
};

export default function bannerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BANNER:
            return {
                ...state,
                loading: true
            };
        case GET_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                banner: action.payload
            };
        case GET_BANNER_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}