import React, { useState, useEffect } from "react";
import { Row, Col, ProgressBar, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailDonasiRutin } from "../Redux/detaildonasi/action";
import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DetailDonasi = (props) => {
  const [now, setNow] = useState(45);
  const refresh = () => {
    setInterval(() => {
      window.location.reload();
    }, 100);
  };
  const { donasi } = props.location.state;
  console.log(donasi);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(fetchDetailDonasiRutin(token, donasi.id));
    dispatch(fetchPagedonasi2(token));
  }, []);
  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container detail-program">
      <Row className="mt-4 text-center justify-content-center">
        <Col>
          <img src={data.thumbnail_image_url} alt="" style={{ width: "50%" }} />
        </Col>
      </Row>
      <Row className="mt-3 mx-2 text-center justify-content-center">
        <Col md={12}>
          <h4>{data.title}</h4>
        </Col>
      </Row>
      <Row className="mt-3 mx-2 text-center justify-content-center">
        {/* <Col md={8}>
          Dana Terkumpul <h2>Rp. 10.430.000</h2>
          Periode Donasi dari{" "}
          <i>
            <b>
              <Moment format="YYYY-MM-DD">{data.valid_from}</Moment>
            </b>
          </i>{" "}
          -{" "}
          <i>
            <b>
              <Moment format="YYYY-MM-DD">{data.valid_to}</Moment>
            </b>
          </i>
        </Col> */}
        {/* <Col md={8}>
          <ProgressBar
            animated
            now={now}
            label={`${now}%`}
            className="donasi-progressbar"
          />
        </Col> */}
        {/* <Col md={4}>
          dari target{" "}
          <i>
            <b>
              <NumberFormat
                value={data.target}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp. "}
              />
            </b>
          </i>{" "}
        </Col> */}
      </Row>
      <Row className="my-4 mx-2 text-justify">
        <Col>{data.description}</Col>
      </Row>

      <Row className="mt-4 text-center justify-content-center">
        <Col md={3}>
          <Link
            to={{
              pathname: "/order-rutin/" + data.id,
              state: { data: donasi },
            }}
            className="mr-2"
          >
            <Button variant="primary">Donasi Sekarang</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4 text-justify justify-content-center">
        <Col md={8}>
          <h5>Ucapan Dan Doa</h5>
        </Col>
      </Row>
      {/* <Row className="text-justify justify-content-center">
        <Col md={8}>
          Arief Ramdhani - "Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old."
        </Col>
      </Row> */}
      <Row className="mt-5 text-justify">
        <Col md={8}>
          <h3>Kamu juga bisa berdonasi yang lain :</h3>
        </Col>
      </Row>
      <Carousel responsive={responsive}>
        {datas.map((data, idx) => (
          <Col key={idx}>
            <Card>
              {data.thumbnail_image_url ? (
                <Card.Img
                  variant="top"
                  src={data.thumbnail_image_url}
                  style={{ width: "50%" }}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
                  alt=""
                />
              )}
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                {/* <Card.Text>
                      <ProgressBar
                        animated
                        now={now}
                        label={`${now}%`}
                        className="donasi-progressbar"
                      />
                    </Card.Text> */}
                {/* <Card.Text>
                      <div className="dana-terkumpul">
                        Rp 3.170.000 terkumpul dari Rp 150.000.000
                      </div>
                    </Card.Text> */}
                {/* <Card.Text>Nama Penggalang Dana</Card.Text> */}

                <Link
                  to={{
                    pathname: "/donasi-detail/" + data.id,
                    state: { donasi: data },
                  }}
                >
                  <Button onClick={refresh}>Donasi Sekarang</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Carousel>
    </div>
  );
};

export default DetailDonasi;
