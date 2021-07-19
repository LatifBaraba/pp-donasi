import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailDonasiRutin } from "../Redux/detaildonasi/action";

const DetailDonasi2 = (props) => {
  const { donasi } = props.location.state;
  console.log(donasi);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(fetchDetailDonasiRutin(token, donasi.id));
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  console.log(data, "asup pron en");

  return (
    <div className="container detail-program">
      <Row className="mt-3 p-2">
        <Carousel>
          {/* {datas.map((data, idx) => ( */}
            <Carousel.Item>
              {/* <img src={data.thumbnail_image_url} alt="" style={{maxWidth: "100%"}}/> */}
              {data.thumbnail_image_url ? <Card.Img variant="top" src={data.thumbnail_image_url} style={{maxWidth: "100%"}} /> : <Card.Img variant="top" src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="" style={{maxWidth: "100%"}}/>}
              <Carousel.Caption>
                <h3>{data.title}</h3>                
              </Carousel.Caption>
            </Carousel.Item>
          {/* ))} */}
        </Carousel>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col md={8} className="text-justify">
            {data.description}
        </Col>
      </Row>
      <Row className="mt-5">
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
              {/* <Button variant="primary" className="button-donasi">Primary</Button> */}
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
              {/* <Button variant="primary" className="button-donasi">Primary</Button> */}
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
              {/* <Button variant="primary" className="button-donasi">Primary</Button> */}
            </Card.ImgOverlay>
          </Card>
        </Col>
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
      <Row className="mt-4 text-center justify-content-center">
        <Col md={3}>
          <Button variant="primary">Donasi Sekarang</Button>
        </Col>
        <Col md={3}>
          <Button variant="secondary">Donasi Bulan ini</Button>
        </Col>
      </Row>
    </div>
  );
};

export default DetailDonasi2;
