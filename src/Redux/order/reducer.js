import {
  ORDER,
  ORDER_SUCCESS,
  ORDER_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        loading: true,
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ORDER_FAILURE:
      return {
        ...state,
        loading: false,
      };    
    default:
      return state;
  }
};

export default orderReducer;
