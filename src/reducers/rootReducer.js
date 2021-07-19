import { combineReducers } from 'redux'
import loginReducer from "../Redux/auth/login/reducer";
import registerReducer from "../Redux/auth/register/reducer";
import forgotReducer from "../Redux/auth/forgot/reducer";
import rutinReducer from "../Redux/rutin/reducer";
import bannerReducer from "../Redux/banner/reducer";
import donasilistReducer from "../Redux/donasilist/reducer";
import donasilist2Reducer from "../Redux/donasilist2/reducer";
import pagedonasiReducer from "../Redux/pagelistdonasi/reducer";
import pagedonasi2Reducer from "../Redux/pagelistdonasi2/reducer";
import tokenReducer from "../Redux/token/reducer";
import donasiDetailReducer from '../Redux/detaildonasi/reducer'

const reducers = combineReducers({
    loginReducer,
    registerReducer,
    forgotReducer,
    rutinReducer,
    bannerReducer,
    donasilistReducer,
    donasilist2Reducer,
    pagedonasiReducer,
    pagedonasi2Reducer,
    tokenReducer,
    donasiDetailReducer
})

export default reducers