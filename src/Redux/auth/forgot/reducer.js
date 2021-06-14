import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from "../../actionTypes";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default forgotReducer;
