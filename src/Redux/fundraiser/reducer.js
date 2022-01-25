import {
  GET_FUNDRAISER,
  GET_FUNDRAISER_SUCCESS,
  GET_FUNDRAISER_FAILURE,
  GET_FUNDRAISER_BY_DONASI,
  GET_FUNDRAISER_BY_DONASI_SUCCESS,
  GET_FUNDRAISER_BY_DONASI_FAILURE,
  GET_FUNDRAISER_BY_TRANSACTION,
  GET_FUNDRAISER_BY_TRANSACTION_SUCCESS,
  GET_FUNDRAISER_BY_TRANSACTION_FAILURE,
  GET_FUNDRAISER_BY_SEO,
  GET_FUNDRAISER_BY_SEO_SUCCESS,
  GET_FUNDRAISER_BY_SEO_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  fundraiser: [],
  fundraiserbydonate: [],
  fundraiserbytransaction: [],
  fundraiserbyseo: [],
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
    case GET_FUNDRAISER_BY_TRANSACTION:
      return {
        ...state,
        loading: true,
      };
    case GET_FUNDRAISER_BY_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fundraiserbytransaction: action.payload,
      };
    case GET_FUNDRAISER_BY_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_FUNDRAISER_BY_SEO:
      return {
        ...state,
        loading: true,
      };
    case GET_FUNDRAISER_BY_SEO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fundraiserbyseo: action.payload,
      };
    case GET_FUNDRAISER_BY_SEO_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
