import { React, useEffect, useState } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchPagedonasi2 } from "../../Redux/pagelistdonasi2/actions";

import { fetchKabarTerbaruOt } from "../../Redux/kabarterbaru/action";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { fetchFundraiserByDonasi } from "../../Redux/fundraiser/action";

const Listfundraiser = () => {
  const [now, setNow] = useState(45);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    // dispatch(fetchPagedonasi2(token));
    dispatch(fetchFundraiserByDonasi(token, id));
  }, []);

  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datafund = useSelector((state) => state.fundraiserReducer.fundraiserbydonate);
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
                  {"Fundraiser "}({datafund.length})
                </h2>
              </div>
            </div>
          </div>
        </center>
        {datafund.map((data, idx) => (
          <Row key={idx}>
            <Col md={12}>
            <Card>
                <Card.Body>
                <b>
                    <a style={{ color: "#48c78e" }}>
                      <Link
                        to={{
                          pathname: "/" + data.seo_url,
                          // state: window.location.pathname,
                        }}
                      >
                        {data.title}
                      </Link>
                    </a>
                  </b>
                  <br />
                  <a>{data.nama_lengkap}</a>
                  <br />
                  <a style={{ color: "#b3b5b4" }}>Mengajak 125 Orang</a>
                  <br />
                  <NumberFormat
                    className="mr-2"
                    value={data.donation_collect}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Donasi Terkumpul Rp. "}
                  />
                  <hr />
                 
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
