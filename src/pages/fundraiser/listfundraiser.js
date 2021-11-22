import { React, useEffect, useState } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchPagedonasi2 } from "../../Redux/pagelistdonasi2/actions";
import {
  fetchAllHistoryRutinDonation,
  fetchHistoryRutinDonation,
} from "../../Redux/detaildonasi/action";
import { fetchKabarTerbaruOt } from "../../Redux/kabarterbaru/action";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const Listfundraiser = () => {
  const [now, setNow] = useState(45);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPagedonasi2(token));
    dispatch(fetchKabarTerbaruOt(token, id));
  }, []);

  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);
  const kabarterbaru = useSelector(
    (state) => state.kabarTerbaruReducer.kabarterbaruot
  );
  const allrutinhistorydata = useSelector(
    (state) => state.donasiDetailReducer.allrutinhistorydata
  );

  const rutinhistorydata = useSelector(
    (state) => state.donasiDetailReducer.rutinhistorydata
  );

  return (
    <div className="content">
      <div className="container list-program">
        <center>
          <div className="col-md-6">
            <div className="article-detail">
              <div className="article-heading">
                <h2 className="article-title">
                  {"Fundraiser "}({kabarterbaru.length})
                </h2>
              </div>
            </div>
          </div>
        </center>
        {kabarterbaru.map((data, idx) => (
          <Row key={idx}>
            <Col md={12}>
              <Card
                bg={"secondary"}
                text={"secondary" === "light" ? "dark" : "white"}                
                className="mb-2"
              >
                {/* <Card.Header>{data.username}</Card.Header> */}
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h4>
                      <Card.Text>{data.title}</Card.Text>
                    </h4>
                    <h6>
                      <Card.Text>
                        <div className="dana-terkumpul">
                          <Moment fromNow>{data.created_at}</Moment>
                        </div>
                      </Card.Text>
                    </h6>
                    <h6>
                      <Card.Text>
                        Pencairan Dana Sebesar
                        <b>
                          <NumberFormat
                            value={data.disbursement_balance}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={" Rp. "}
                          />
                          .~
                        </b>
                      </Card.Text>
                    </h6>
                    <h6>
                      <Card.Text>
                        <p>
                          ke Rekening {data.disbursement_bank_name} {" "} {data.disbursement_account}                          
                        </p>
                        <p>a/n {data.disbursement_name}</p>
                        <p>
                          Rencana Penggunaan Pencairan :{" "}
                          {data.disbursement_description}
                        </p>
                      </Card.Text>
                    </h6>
                    <h6>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">
                          <Moment fromNow>{data.paid_at}</Moment>
                        </cite>
                      </footer>
                    </h6>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Listfundraiser;
