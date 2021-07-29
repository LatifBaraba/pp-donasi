import {
    ADD_CONFIRM,
    ADD_CONFIRM_SUCCESS,
    ADD_CONFIRM_FAILURE    
    
} from '../actionTypes';

const initialState = {
    loading: false,
    confirm: [],
    error: null
};

export default function confirmReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONFIRM:
            return {
                ...state,
                loading: true
            };
        case ADD_CONFIRM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case ADD_CONFIRM_FAILURE:
            return {
                ...state,
                loading: false,
            };        
        default:
            return state;
    }
}