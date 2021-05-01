import { combineReducers } from 'redux'
import loginReducer from "../Redux/auth/login/reducer";
import registerReducer from "../Redux/auth/register/reducer";
import forgotReducer from "../Redux/auth/forgot/reducer";

const reducers = combineReducers({
    loginReducer,
    registerReducer,
    forgotReducer
})

export default reducers