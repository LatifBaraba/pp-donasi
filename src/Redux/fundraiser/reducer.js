import {
  GET_FUNDRAISER,
  GET_FUNDRAISER_SUCCESS,
  GET_FUNDRAISER_FAILURE,
  GET_FUNDRAISER_BY_DONASI,
  GET_FUNDRAISER_BY_DONASI_SUCCESS,
  GET_FUNDRAISER_BY_DONASI_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  fundraiser: [],
  fundraiserbydonate: [],
  error: null,
};

export default function fundraiserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FUNDRAISER:
      return {
        ...state,
        loading: true,
      };
    case GET_FUNDRAISER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fundraiser: action.payload,
      };
    case GET_FUNDRAISER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_FUNDRAISER_BY_DONASI:
      return {
        ...state,
        loading: true,
      };
    case GET_FUNDRAISER_BY_DONASI_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fundraiserbydonate: action.payload,
      };
    case GET_FUNDRAISER_BY_DONASI_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
