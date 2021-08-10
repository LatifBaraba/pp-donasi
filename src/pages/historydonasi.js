import { React, useEffect, useState } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { fetchPageDonasi } from '../Redux/pagelistdonasi/actions'
import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";

const ListProgram = () => {
  const [now, setNow] = useState(45);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPageDonasi(token));
    dispatch(fetchPagedonasi2(token));
  }, []);

  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  return (
    <div className="content">
    
      <div className="container list-program">
      <center>
        <div className="col-md-6">
          <div className="article-detail">
            <div className="article-heading">
              <h2 className="article-title">{"Donasi"}</h2>
            </div>
          </div>
        </div>
        </center>
        {datas.map((data, idx) => (
            
          <Row key={idx}>
            <Col md={12}>
              <Card>
                <Card.Body>
                  {/* <Card.Title>{data.title}</Card.Title>      */}
                  <h6 style={{ fontSize: "font-size: 1.75rem" }}>Anonim</h6>
                  <Card.Text>
                    <div className="dana-terkumpul">
                      Berdonasi sebesar
                      {/* <NumberFormat
                      value={data.target}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={" Rp. "}
                    /> */}
                    </div>
                  </Card.Text>
                  <div className="dana-terkumpul">
                    <Moment fromNow>2021-08-06 12:40-00</Moment>{" "}
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
