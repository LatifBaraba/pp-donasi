import { React, useEffect, useState } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { fetchPageDonasi } from '../Redux/pagelistdonasi/actions'
import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { fetchAllHistoryRutinDonation } from "../Redux/detaildonasi/action";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const ListProgram = () => {
  const [now, setNow] = useState(45);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch(fetchPageDonasi(token));
    dispatch(fetchPagedonasi2(token));
    dispatch(fetchAllHistoryRutinDonation(token));
  }, []);

  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  const allrutinhistorydata = useSelector((state) => state.donasiDetailReducer.allrutinhistorydata);
  
  return (
    <div className="content">
    
      <div className="container list-program">
      <center>
        <div className="col-md-6">
          <div className="article-detail">
            <div className="article-heading">
              <h2 className="article-title">{"Donasi "}({allrutinhistorydata.length})</h2>
            </div>
          </div>
        </div>
        </center>
        {allrutinhistorydata.map((data, idx) => (
            
          <Row key={idx}>
            <Col md={12}>
              <Card>
                <Card.Body>
                  {/* <Card.Title>{data.title}</Card.Title>      */}
                  <h6 style={{ fontSize: "font-size: 1.75rem" }}>{data.username}</h6>
                  <Card.Text>
                    <div className="dana-terkumpul">
                      Berdonasi sebesar
                      <NumberFormat
                      value={data.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={" Rp. "}
                    />
                    </div>
                  </Card.Text>
                  <div className="dana-terkumpul">
                    <Moment fromNow>{data.paid_at}</Moment>{" "}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
      
    </div>
  );
};

export default ListProgram;
