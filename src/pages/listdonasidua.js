import {React, useEffect} from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";

import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { useDispatch, useSelector } from "react-redux";

const Listdonasidua = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPagedonasi2(token));
  }, []);
  const pagedonasi2Data = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  return (
    <div className="container list-donasi-dua">
      <Row>
        {/* <Col md={12}> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>1 slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>1 slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>1 slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* </Col> */}
      </Row>
      <Row>
        <Col md={4} className="mb-2">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text className="card-desc">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">
                Primary
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text className="card-desc">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">
                Primary
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text className="card-desc">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">
                Primary
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text className="card-desc">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">
                Primary
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text className="card-desc">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="primary" className="button-donasi">
                Primary
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Listdonasidua;
