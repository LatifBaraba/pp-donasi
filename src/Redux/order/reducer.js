import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };    
    default:
      return state;
  }
};

export default orderReducer;
