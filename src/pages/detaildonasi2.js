import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, ProgressBar, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailDonasi } from "../Redux/detaildonasi/action";
import { fetchDonasilist } from "../Redux/donasilist/actions";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const DetailDonasi2 = (props) => {
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
    dispatch(fetchDetailDonasi(token, donasi.id));
    dispatch(fetchDonasilist(token));
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const donasilistData = useSelector(
    (state) => state.donasilistReducer.donasilist
  );
  // console.log(data, "asup pron en");
  // console.log(donasilistData, "asup ");

  return (
    <div className="container detail-program">
      {/* <Row className="mt-3 p-2">
        <Carousel>
          
          <Carousel.Item>
          
            {data.thumbnail_image_url ? (
              <Card.Img
                variant="top"
                src={data.thumbnail_image_url}
                style={{ maxWidth: "100%" }}
              />
            ) : (
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            )}
            <Carousel.Caption>
              <h3>{data.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col md={8} className="text-justify">
          {data.description}
        </Col>
      </Row> */}
      {/* <div className="container detail-program"> */}
      <Row className="mt-4 text-center justify-content-center">
        <Col>
          <img
            src={data.thumbnail_image_url}
            alt=""
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mt-3 mx-2 text-center justify-content-center">
        <Col md={12}>
          <h4>{data.title}</h4>
        </Col>
      </Row>
      <Row className="mt-3 mx-2 text-center justify-content-center">
        <Col md={8}>
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
        </Col>
        <Col md={8}>
          <ProgressBar
            animated
            now={now}
            label={`${now}%`}
            className="donasi-progressbar"
          />
          {/* <ProgressBar
              animated
              now={now}
              label={`${now}%`}
              srOnly
              className="donasi-progressbar"
            /> */}
        </Col>
        <Col md={4}>
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
      {/* </div> */}
      <Row className="mt-4 text-center justify-content-center">
        <Col md={3}>
          {/* <Button variant="primary">Donasi Sekarang</Button> */}
          <Link
            to={{
              pathname: "/order/" + data.id,
              // state: { data: donasi.id },
            }}
            className="mr-2"
          >
            <Button variant="primary">Donasi Sekarang</Button>
            {/* <Edit className="edit-berita" style={{ cursor: "pointer" }} /> */}
          </Link>
        </Col>
        {/* <Col md={3}>
          <Button variant="secondary">Donasi Bulan ini</Button>
        </Col> */}
        {data.ayobantu_link !== "" && (
          <Col md={3}>
            <a
              href={data.ayobantu_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Donasi di ayobantu.com</Button>
            </a>
          </Col>
        )}
        {data.kitabisa_link !== "" && (
          <Col md={3}>
            <a
              href={data.kitabisa_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Donasi di kitabisa.com</Button>
            </a>
          </Col>
        )}
      </Row>
      <Row className="mt-4 text-justify justify-content-center">
        <Col md={8}>
          <h5>Ucapan Dan Doa</h5>
        </Col>
      </Row>
      <Row className="text-justify justify-content-center">
        <Col md={8}>
          Arief Ramdhani - "Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old."
        </Col>
      </Row>
      <Row className="mt-5 text-justify">
        <Col md={8}>
          <h3>Kamu juga bisa berdonasi yang lain :</h3>
        </Col>
      </Row>
      {donasilistData.map((data, idx) => (
        <Row>
          {data.id !== donasi.id ? (
            <Col md={3} key={idx}>
              <Card>
                {data.thumbnail_image_url ? (
                  <Card.Img variant="top" src={data.thumbnail_image_url} />
                ) : (
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
                    alt=""
                  />
                )}
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>                  
                  <Card.Text>
                    <ProgressBar
                      animated
                      now={now}
                      label={`${now}%`}
                      className="donasi-progressbar"
                    />
                  </Card.Text>
                  <Card.Text>
                    <div className="dana-terkumpul">
                      Rp 3.170.000 terkumpul dari Rp 150.000.000
                    </div>
                  </Card.Text>
                  <Card.Text>Nama Penggalang Dana</Card.Text>

                  <Link
                    to={{
                      pathname: "/donasi-detail2/" + data.id,
                      state: { donasi: data },
                    }}
                  >
                    <Button onClick={refresh}>Donasi Sekarang</Button>
                  </Link>                  
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <Col></Col>
          )}
        </Row>
      ))}
      {/* <Row className="mt-5">
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">Primary</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">Primary</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">Primary</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row> */}

      {/* <Row className="text-center justify-content-center"></Row> */}
    </div>
  );
};

export default DetailDonasi2;
