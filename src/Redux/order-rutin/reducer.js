import {
  ORDER_RUTIN,
  ORDER_RUTIN_SUCCESS,
  ORDER_RUTIN_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const orderRutinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_RUTIN:
      return {
        ...state,
        loading: true,
      };
    case ORDER_RUTIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ORDER_RUTIN_FAILURE:
      return {
        ...state,
        loading: false,
      };    
    default:
      return state;
  }
};

export default orderRutinReducer;
