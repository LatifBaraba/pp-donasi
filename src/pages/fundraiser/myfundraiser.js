import React, { useState, useEffect } from "react";
import { fetchFundraiser } from "../../Redux/fundraiser/action";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Moment from "react-moment";

const Myfundraiser = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  useEffect(() => {
    dispatch(fetchFundraiser(token, username));
  }, [token, username]);

  const datafund = useSelector((state) => state.fundraiserReducer.fundraiser);
  console.log(datafund);
  return (
    <div>
      <div className="container detail-program">
        <div className="content">
          <div className="container list-program">
            <center>
              <div className="col-md-12">
                <div className="article-detail">
                  <b>
                    <h4>Galang Dana Saya</h4>
                  </b>
                  <br />
                  {datafund.map((data, idx) => (
                    <div>
                      <Row key={idx}>
                        <Col md={3} className="mt-5"></Col>
                        <Col md={6}>
                          <Card>
                            <div>
                              <badge
                                className={`badge badge-success float-left`}
                              >
                                Aktif
                              </badge>
                            </div>
                            <Card.Body>
                              <b>
                                <a style={{ color: "#48c78e" }}>{data.title}</a>
                              </b>
                              <hr />
                              <Card.Text>
                                <div>
                                  {!data.nominal ? (
                                    "Belum terkumpul"
                                  ) : (
                                    <NumberFormat
                                      value={data.donation_collect}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"Donasi Terkumpul Rp. "}
                                    />
                                  )}
                                </div>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfundraiser;
