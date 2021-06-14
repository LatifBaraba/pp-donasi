import { INPUT_RUTIN, INPUT_RUTIN_SUCCESS, INPUT_RUTIN_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

const rutinReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_RUTIN:
      return {
        ...state,
        loading: true,
      };
    case INPUT_RUTIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case INPUT_RUTIN_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default rutinReducer;
