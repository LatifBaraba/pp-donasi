import { combineReducers } from 'redux'
import loginReducer from "../Redux/auth/login/reducer";
import registerReducer from "../Redux/auth/register/reducer";
import forgotReducer from "../Redux/auth/forgot/reducer";
// import rutinReducer from "../Redux/rutin/reducer";
import bannerReducer from "../Redux/banner/reducer";
import donasilistReducer from "../Redux/donasilist/reducer";
import donasilist2Reducer from "../Redux/donasilist2/reducer";
import pagedonasiReducer from "../Redux/pagelistdonasi/reducer";
import pagedonasi2Reducer from "../Redux/pagelistdonasi2/reducer";
import tokenReducer from "../Redux/token/reducer";
import orderReducer from "../Redux/order/reducer";
import orderRutinReducer from "../Redux/order-rutin/reducer";
import confirmReducer from "../Redux/confirm/reducer";
import donasiDetailReducer from '../pages/DonasiRutin/Controller/detaildonasi/reducer'
import historyReducer from '../Redux/history/reducer'
import detailReducer from '../Redux/detail/reducers'
import invoiceReducer from '../Redux/invoice/reducer'
import kabarTerbaruReducer from '../Redux/kabarterbaru/reducer'
import fundraiserReducer from '../Redux/fundraiser/reducer'
import orderfundraiserReducer from '../Redux/order-fundraiser/reducer'


const reducers = combineReducers({
    loginReducer,
    registerReducer,
    forgotReducer,
    // rutinReducer,
    bannerReducer,
    donasilistReducer,
    donasilist2Reducer,
    pagedonasiReducer,
    pagedonasi2Reducer,
    tokenReducer,
    orderReducer,
    orderRutinReducer,
    confirmReducer,
    donasiDetailReducer,
    historyReducer,
    detailReducer,
    invoiceReducer,
    kabarTerbaruReducer,
    fundraiserReducer,
    orderfundraiserReducer
})

export default reducers