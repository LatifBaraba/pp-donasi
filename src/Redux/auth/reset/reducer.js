import {
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
  } from "../../actionTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const resetReducer = (state = initialState, action) => {
    switch (action.type) {
      case RESET_PASSWORD:
        return {
          ...state,
          loading: true,
        };
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case RESET_PASSWORD_FAILURE:
        return {
          ...state,
          loading: false,
        };      
      default:
        return state;
    }
  };
  
  export default resetReducer;
  