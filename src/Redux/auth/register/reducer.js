import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
