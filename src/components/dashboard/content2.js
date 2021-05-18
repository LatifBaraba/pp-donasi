import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

const content2 = () => {
  return (
    <div className="content2">
        <Row className="p-2">
            <Col className="content-title">
                <div className="content-title-name">
                    <h4>Program Donasi</h4>
                    <h5>#CeritaDariJalanan</h5>
                </div>
                <a href="/list-program">Lihat Lainnya</a>
            </Col>
      </Row>
      <Row className="content-donasi">
          <Col md={4}>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default content2;
