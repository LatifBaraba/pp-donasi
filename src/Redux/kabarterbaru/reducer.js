import {
  GET_KABAR_TERBARU_OT,
  GET_KABAR_TERBARU_OT_SUCCESS,
  GET_KABAR_TERBARU_OT_FAILURE,
  GET_KABAR_TERBARU_RUTIN,
  GET_KABAR_TERBARU_RUTIN_SUCCESS,
  GET_KABAR_TERBARU_RUTIN_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  kabarterbaruot: [],
  kabarterbarurutin: [],
  error: null,
};

export default function kabarTerbaruReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KABAR_TERBARU_OT:
      return {
        ...state,
        loading: true,
      };
    case GET_KABAR_TERBARU_OT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        kabarterbaruot: action.payload,
      };
    case GET_KABAR_TERBARU_OT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_KABAR_TERBARU_RUTIN:
      return {
        ...state,
        loading: true,
      };
    case GET_KABAR_TERBARU_RUTIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        kabarterbarurutin: action.payload,
      };
    case GET_KABAR_TERBARU_RUTIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
