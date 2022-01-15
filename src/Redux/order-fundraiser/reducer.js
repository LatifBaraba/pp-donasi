import {
  ORDER_FUNDRAISER,
  ORDER_FUNDRAISER_SUCCESS,
  ORDER_FUNDRAISER_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const orderFundraiserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_FUNDRAISER:
      return {
        ...state,
        loading: true,
      };
    case ORDER_FUNDRAISER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ORDER_FUNDRAISER_FAILURE:
      return {
        ...state,
        loading: false,
      };    
    default:
      return state;
  }
};

export default orderFundraiserReducer;
