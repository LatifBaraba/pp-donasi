import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "../../actionTypes";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default forgotReducer;
