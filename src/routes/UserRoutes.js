import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../history";

import Layout from "../components/layout/layout";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Reset from "../pages/Auth/Reset";

import Dashboard from "../pages/Dashboard/Dashboard";
import Order from "../pages/order";
import OrderRutin from "../pages/orderrutin";
import Checkout from "../pages/checkout";
import Confirm from "../pages/confirm";
import ListDonasiSatu from "../pages/listdonasisatu";
import ListDonasiDua from "../pages/listdonasidua";
import RutinCampaign from "../pages/DonasiRutin/Detail/RutinCampaign";
import DonasiDetail2 from "../pages/detaildonasi2";
import History from "../pages/history";
import HistoryDonate from "../pages/historydonasi";
import RutinHistoryDonate from "../pages/historydonasirutin";
import KabarTerbaruOt from "../pages/kabarterbaruot";
import KabarTerbaruRutin from "../pages/kabarterbarurutin";
// import RutinCampaign from "../pages/DonasiRutin/Detail/RutinCampaign";
import Detail from "../pages/detail";
import Invoice from "../pages/invoice";
import Thankyou from "../pages/thankyou";

import ListFundraiser from "../pages/Fundraiser/listfundraiser";
import AddFundraiser from "../pages/Fundraiser/addfundraiser";
import MyFundraiser from "../pages/Fundraiser/myfundraiser";
import EditFundraiser from "../pages/Fundraiser/editfundraiser";
import SeoUrl from "../pages/Fundraiser/detailfundraiser";
import OrderFund from "../pages/Fundraiser/orderfundraiser";

const UserRoutes = () => {
  return (
    <div>
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
          <Layout>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/order/:id" exact component={Order} />
            <Route path="/order-rutin/:id/:id" exact component={OrderRutin} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/list-donasi" exact component={ListDonasiSatu} />
            <Route path="/list-donasi-dua" exact component={ListDonasiDua} />
            <Route path="/rutin/:id" exact component={RutinCampaign} />
            <Route exact path="/otime/:id" component={DonasiDetail2} />
            {/* <Route path="/rutin" exact component={RutinCampaign} /> */}
            <Route path="/history" exact component={History} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/invoice/:id/:id" exact component={Invoice} />
            <Route path="/thankyou" exact component={Thankyou} />
            <Route path="/history-donate/:id" exact component={HistoryDonate} />
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
                url !== "/dashboard" ? (
                  url !== "/history" ? (
                    url !== "/checkout" ? (
                      url !== "/list-donasi" ? (
                        url !== "/list-donasi-dua" ? (
                          url !== "/rutin" ? (
                            url !== "/thankyou" ? (
                              url !== "/fundraiser" ? (
                                url !== "/myfundraiser" ? (
                                  url !== "/confirm" ? (
                                    <Switch>
                                      <Route
                                        exact
                                        path="/:id"
                                        component={SeoUrl}
                                      />
                                    </Switch>
                                  ) : (
                                    ""
                                  )
                                ) : (
                                  ""
                                )
                              ) : (
                                ""
                              )
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )
              }
            />
            <Route path="/orderfund/:id" exact component={OrderFund} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoutes;
