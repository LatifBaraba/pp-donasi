import {
    ADD_CONFIRM,
    ADD_CONFIRM_SUCCESS,
    ADD_CONFIRM_FAILURE  ,

  GET_CONFIRMLIST,
  GET_CONFIRMLIST_SUCCESS,
  GET_CONFIRMLIST_FAILURE
    
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
            case GET_CONFIRMLIST:
                return {
                    ...state,
                    loading: true
                };
            case GET_CONFIRMLIST_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    confirm: action.payload
                };
            case GET_CONFIRMLIST_FAILURE:
                return {
                    ...state,
                    loading: false,
                };
        default:
            return state;
    }
}