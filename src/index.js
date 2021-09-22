import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import './App.scss';
import { Redirect } from 'react-router-dom'
import Layout from './components/layout/layout'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
// Import Pages
// import Main from './pages/main'
import Dashboard from './pages/dashboard'
import Order from './pages/order'
import OrderRutin from './pages/orderrutin'
import Checkout from './pages/checkout'
import Confirm from './pages/confirm'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import ListDonasiSatu from './pages/listdonasisatu'
import ListDonasiDua from './pages/listdonasidua'
import DonasiDetail from './pages/detaildonasi'
import DonasiDetail2 from './pages/detaildonasi2'
import History from './pages/history'
import HistoryDonate from './pages/historydonasi'
import RutinHistoryDonate from './pages/historydonasirutin'
import Rutin from "./pages/rutin";
import Detail from "./pages/detail";
import Invoice from "./pages/invoice";
import Thankyou from "./pages/thankyou";

import thunk from 'redux-thunk'
import reducers from './reducers/rootReducer'

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
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
        <Layout>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/order/:id" exact component={Order} />
          <Route path="/order-rutin/:id/:id" exact component={OrderRutin} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/list-donasi" exact component={ListDonasiSatu} />
          <Route path="/list-donasi-dua" exact component={ListDonasiDua} />
          <Route path="/rutin/:id" exact component={DonasiDetail} />
          <Route path="/otime/:id" exact component={DonasiDetail2} />
          <Route path="/rutin" exact component={Rutin} />
          <Route path="/history" exact component={History} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/invoice/:id/:id" exact component={Invoice} />
          <Route path="/thankyou" exact component={Thankyou} />
          <Route path="/history-donate" exact component={HistoryDonate} />
          <Route path="/rutin-history-donate" exact component={RutinHistoryDonate} />


          <Route path="/confirm" exact component={Confirm}/>
        </Layout>
        {/* End Main Route */}
      </Switch>
    </Router>
  </Provider>
  , document.getElementById("root"));
