import {React, useEffect} from "react";
import Banner from "../components/dashboard/banner";
import Content from "../components/dashboard/content";
import Content2 from "../components/dashboard/content2";
import { Row } from "react-bootstrap";

// import { fetchBanner } from "../Redux/banner/actions";
import { fetchDonasilist } from "../Redux/donasilist/actions";
import { fetchDonasilist2 } from "../Redux/donasilist2/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../Redux/token/action";

const Dashboard = () => {
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch()

  const setToken = () => (new Promise((resolve,reject) => {
    setTimeout(() => { resolve(dispatch(fetchToken()))}, 250)
  })) 

  const getToken = () => (new Promise((resolve,reject) => {
    setTimeout(() => { resolve(localStorage.getItem("token"))}, 500)
  })) 

  useEffect(() => {
    // dispatch(fetchBanner(token));
    async function fetchTokenAsync() {
      
      if (!localStorage.getItem("token")) {
        console.log("masuk if async")
        let a = await setToken()
        let token = await getToken()
        
        dispatch(fetchDonasilist(token));
        dispatch(fetchDonasilist2(token));  
      } else {
        console.log("masuk else async")
        let token = await getToken()

        dispatch(fetchDonasilist(token));
        dispatch(fetchDonasilist2(token));          
      }

    }

    fetchTokenAsync()
    
  }, []);
  // const bannerData = useSelector((state) => state.bannerReducer.banner);
  const donasilistData = useSelector((state) => state.donasilistReducer.donasilist);
  const donasilist2Data = useSelector((state) => state.donasilist2Reducer.donasilist2);
    
  
  return (
    <div className="container dashboard">
      <Row>
        <Banner data={donasilistData}/>
      </Row>
      <Row>
        <Content data={donasilist2Data}/>
        <Content2 data={donasilistData}/>
      </Row>
    </div>
  );
};

export default Dashboard;
