import { React, useEffect } from "react";
import Banner from "../../components/dashboard/banner";
import Rutin from "../DonasiRutin"
import OneTime from "../DonasiOneTime"
import { Row } from "react-bootstrap";
import { fetchDonasilist } from "../../Redux/donasilist/actions";
import { fetchDonasilist2 } from "../../Redux/donasilist2/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../Redux/token/action";

const Dashboard = () => {
  const dispatch = useDispatch();

  const setToken = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dispatch(fetchToken()));
      }, 1000);
    });

  const getToken = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(localStorage.getItem("token"));
      }, 1000);
    });

  useEffect(() => {
    async function fetchTokenAsync() {
      if (!localStorage.getItem("token")) {
        dispatch(fetchToken());
      } else {
        let token = await getToken();

        dispatch(fetchDonasilist(token, ""));
        dispatch(fetchDonasilist2(token));
      }
    }

    fetchTokenAsync();
  }, [localStorage.getItem("token")]);
  const donasilistData = useSelector(
    (state) => state.donasilistReducer.donasilist
  );
  const donasilist2Data = useSelector(
    (state) => state.donasilist2Reducer.donasilist2
  );

  return (
    <div className="container dashboard">
      <Row>
        <Banner data={donasilistData} />
      </Row>
      <Row>
        <Rutin data={donasilist2Data}/>
        <OneTime data={donasilistData}/>
      </Row>
    </div>
  );
};

export default Dashboard;
