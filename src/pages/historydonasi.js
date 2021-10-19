import { React, useEffect, useState } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
// import { fetchPageDonasi } from '../Redux/pagelistdonasi/actions'
import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { fetchAllHistoryDonation, fetchHistoryDonation } from "../Redux/detaildonasi/action";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const ListProgram = () => {
  const [now, setNow] = useState(45);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    // dispatch(fetchPageDonasi(token));
    dispatch(fetchPagedonasi2(token));
    dispatch(fetchAllHistoryDonation(token));
    dispatch(fetchHistoryDonation(token, id));
  }, []);

  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  const allhistorydata = useSelector((state) => state.donasiDetailReducer.allhistorydata);
  
  const historydata = useSelector(
    (state) => state.donasiDetailReducer.historydata
  );
    console.log(historydata)
  return (
    <div className="content">
    
      <div className="container list-program">
      <center>
        <div className="col-md-6">
          <div className="article-detail">
            <div className="article-heading">
              <h2 className="article-title">{"Donasi "}({historydata.length})</h2>
            </div>
          </div>
        </div>
        </center>
        {historydata.map((data, idx) => (
            
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
