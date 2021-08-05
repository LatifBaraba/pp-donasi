import {
  INVOICE,
  INVOICE_SUCCESS,
  INVOICE_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVOICE:
      return {
        ...state,
        loading: true,
      };
    case INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case INVOICE_FAILURE:
      return {
        ...state,
        loading: false,
      };    
    default:
      return state;
  }
};

export default orderReducer;
