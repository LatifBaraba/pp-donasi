import React, { useState } from "react";

import {
  Row,
  Col,
  Card
  
} from "react-bootstrap";

const Myfundraiser = () => {
  return (
    <div>
      <div className="container detail-program">
        <div className="content">
          <div className="container list-program">
            <center>
              <div className="col-md-12">
                <div className="article-detail">
                  <Row>
                    <Col md={3} className="mt-5"></Col>
                    <Col md={6}>
                      <b>
                        <h4>Galang Dana Saya</h4>
                      </b>
                      <br />
                      <Card>
                        <div>
                          <badge className={`badge badge-success float-left`}>Aktif</badge>
                        </div>
                        <Card.Body>
                          <b>
                            <a style={{ color: "#48c78e" }}>
                              Aip untuk pa uba
                            </a>
                          </b>
                          <hr />
                          <a>Rp. 10.000.000</a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
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
