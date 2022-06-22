import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.scss";
import { Redirect } from "react-router-dom";
import Layout from "./components/layout/layout";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// Import Pages
// import Main from './pages/main'
import Dashboard from "./pages/dashboard";
import Order from "./pages/order";
import OrderRutin from "./pages/orderrutin";
import Checkout from "./pages/checkout";
import Confirm from "./pages/confirm";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import ListDonasiSatu from "./pages/listdonasisatu";
import ListDonasiDua from "./pages/listdonasidua";
import DonasiDetail from "./pages/detaildonasi";
import DonasiDetail2 from "./pages/detaildonasi2";
import History from "./pages/history";
import HistoryDonate from "./pages/historydonasi";
import RutinHistoryDonate from "./pages/historydonasirutin";
import KabarTerbaruOt from "./pages/kabarterbaruot";
import KabarTerbaruRutin from "./pages/kabarterbarurutin";
import ListFundraiser from "./pages/fundraiser/listfundraiser";
import AddFundraiser from "./pages/fundraiser/addfundraiser";
import MyFundraiser from "./pages/fundraiser/myfundraiser";
import EditFundraiser from "./pages/fundraiser/editfundraiser";
import Rutin from "./pages/rutin";
import Detail from "./pages/detail";
import Invoice from "./pages/invoice";
import Thankyou from "./pages/thankyou";
import NotFound from "./pages/notfound";
import DetailDonasi from "./pages/detaildonasi";

import SeoUrl from "./pages/fundraiser/detailfundraiser";
import OrderFund from "./pages/fundraiser/orderfundraiser";

import thunk from "redux-thunk";
import reducers from "./reducers/rootReducer";

import {
  fetchFundraiserByDonasi,
  fetchFundraiserBySeo,
} from "./Redux/fundraiser/action";
import { useDispatch, useSelector } from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk));

function Root() {
  const [seo, setSeo] = useState(false);
  

  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {/* Auth Route */}
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgot" exact component={Forgot} />
            <Route path="/reset" exact component={Reset} />

            {/* Login */}
            {/* End Auth Route */}

            {/* Main Route */}

            {/* {seo === false ? ( */}
            <Layout>
              
              <Route path="/dashboard" exact component={Dashboard} />

              <Route path="/order/:id" exact component={Order} />

              <Route path="/order-rutin/:id/:id" exact component={OrderRutin} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="/list-donasi" exact component={ListDonasiSatu} />
              <Route path="/list-donasi-dua" exact component={ListDonasiDua} />
              <Route path="/rutin/:id" exact component={DonasiDetail} />
              {/* <Route path="/rutin/:id" render={props => <DonasiDetail props={...props}/>} /> */}
              <Route exact path="/otime/:id" component={DonasiDetail2} />
              <Route path="/rutin" exact component={Rutin} />
              <Route path="/history" exact component={History} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/invoice/:id/:id" exact component={Invoice} />
              <Route path="/thankyou" exact component={Thankyou} />
              <Route
                path="/history-donate/:id"
                exact
                component={HistoryDonate}
              />
              <Route
                path="/rutin-history-donate/:id"
                exact
                component={RutinHistoryDonate}
              />
              <Route
                path="/kabar-terbaru-ot/:id"
                exact
                component={KabarTerbaruOt}
              />
              <Route
                path="/kabar-terbaru-rutin/:id"
                exact
                component={KabarTerbaruRutin}
              />
              <Route path="/fundraiser/:id" exact component={ListFundraiser} />
              <Route path="/fundraiser" exact component={AddFundraiser} />
              <Route path="/myfundraiser/:id" exact component={EditFundraiser} />
              <Route path="/myfundraiser" exact component={MyFundraiser} />
              <Route path="/confirm" exact component={Confirm} />
            
              <Route
                path="/:id"
                render={({ match: { url } }) =>
                  url !== "/dashboard" ?
                    url !== "/history" ?
                    url !== "/checkout" ?
                    url !== "/list-donasi" ?
                    url !== "/list-donasi-dua" ?
                    url !== "/rutin" ?
                    url !== "/thankyou" ?
                    url !== "/fundraiser" ?
                    url !== "/myfundraiser" ?
                    url !== "/confirm" ? 
                    
                    <Switch>
                      <Route exact path="/:id" component={SeoUrl} />
                    </Switch>
                   : 
                  
                    "" :"":"":"":"":"":"":"":"":""
                  
                }
              />
              <Route path="/orderfund/:id" exact component={OrderFund} />
            </Layout>
            {/* )} */}
            {/* <Route exact component={NotFound}/> */}
            {/* End Main Route */}
          </Switch>
        </Router>
      </Provider>
      ,
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
