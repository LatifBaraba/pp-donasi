import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const content = () => {
  return (
    <div className="content">
      <Row className="p-2">
        <Col className="content-title">
          <div className="content-title-name">
            <h4>Program Donasi</h4>
            <h5>#TiapHariBerbagi</h5>
          </div>
          {/* <a href="/list-program">Lihat Lainnya</a> */}
          <Link to="/list-donasi">Lihat lainnya</Link>
        </Col>
      </Row>
      <Row className="content-donasi">
        <Col md={4} className="content-donasi-image">
          <img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="" />
        </Col>
        <Col md={8} className="content-donasi-desc">
          <Row className="donasi-1">
            <Col className="donasi-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              possimus est! Unde, voluptate! Aperiam, doloribus architecto. Fuga
              deleniti quod ea?
            </Col>
          </Row>
          <Row className="donasi-2">
            <Col className="daftar-sekarang">
              <Link to="/donasi-detail"><Button>Donasi Sekarang</Button></Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="content-donasi">
        <Col md={4} className="content-donasi-image">
          <img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="" />
        </Col>
        <Col md={8} className="content-donasi-desc">
          <Row className="donasi-1">
            <Col className="donasi-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              possimus est! Unde, voluptate! Aperiam, doloribus architecto. Fuga
              deleniti quod ea?
            </Col>
          </Row>
          <Row className="donasi-2">
            <Col className="daftar-sekarang">
              <Link to="/donasi-detail"><Button>Donasi Sekarang</Button></Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="content-donasi">
        <Col md={4} className="content-donasi-image">
          <img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="" />
        </Col>
        <Col md={8} className="content-donasi-desc">
          <Row className="donasi-1">
            <Col className="donasi-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              possimus est! Unde, voluptate! Aperiam, doloribus architecto. Fuga
              deleniti quod ea?
            </Col>
          </Row>
          <Row className="donasi-2">
            <Col className="daftar-sekarang">
              <Link to="/donasi-detail"><Button>Donasi Sekarang</Button></Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default content;
