import React, { useState, useEffect } from "react";
import { Row, Col, ProgressBar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailDonasiRutin } from "../Redux/detaildonasi/action";
import { Link } from "react-router-dom";

const DetailDonasi = (props) => {
  const [now, setNow] = useState(45);

  const { donasi } = props.location.state;
  console.log(donasi);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(fetchDetailDonasiRutin(token, donasi.id));
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  console.log(data, "datanyos");
  return (
    <div className="container detail-program">
      <Row className="mt-3 p-2">
        <Col>
          <img
            src={data.thumbnail_image_url}
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mt-3 mx-2">
        <Col md={4}>
          <h4>{data.title}</h4>
        </Col>
      </Row>
      <Row className="mt-3 mx-2">
        {/* <Col md={8}>
          <ProgressBar
            animated
            now={now}
            label={`${now}%`}
            className="donasi-progressbar"
          />
          <ProgressBar
            animated
            now={now}
            label={`${now}%`}
            srOnly
            className="donasi-progressbar"
          />
        </Col> */}
        <Col md={4}>
          {data.valid_from} - {data.valid_to}
        </Col>
      </Row>
      <Row className="my-4 mx-2 text-justify">
        <Col>{data.description}</Col>
      </Row>
      {/* <Row className="my-2 mx-2 text-justify">
                <Col>
                    <h5>Ucapan Dan Doa</h5>
                </Col>
            </Row> */}
      {/* <Row className="my-2 mx-2 text-justify">
                <Col>
                    Arief Ramdhani - "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                </Col>
            </Row> */}
      <Row className="text-center justify-content-center">
        {data.ayobantu_link !== "" && (
          <Col md={6}>
            <a
              href={data.ayobantu_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Ayo Bantu</Button>
            </a>
          </Col>
        )}
        {data.kitabisa_link !== "" && (
          <Col md={6}>
            <a
              href={data.kitabisa_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Kita Bisa</Button>
            </a>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default DetailDonasi;
