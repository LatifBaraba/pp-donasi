import {React, useEffect} from "react";
import { Row, Col, Button } from "react-bootstrap";

import { fetchPagedonasi } from "../Redux/pagelistdonasi/actions";
import { useDispatch, useSelector } from "react-redux";

const ListProgram = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPagedonasi(token));
  }, []);
  const pagedonasiData = useSelector((state) => state.pagedonasiReducer.pagedonasi);

  return (
    <div className="container list-program">
      <Row className="mt-3">
        <Col md={4}>
          <img
            src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
            alt=""
          />
        </Col>
        <Col md={8} className="program-content">
          <Row>
            <Col>
              <h4 className="text-center">Program Donasi Title</h4>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                officiis.
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-right">
              <Button>Daftar Sekarang</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <img
            src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
            alt=""
          />
        </Col>
        <Col md={8} className="program-content">
          <Row>
            <Col>
              <h4 className="text-center">Program Donasi Title</h4>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                officiis.
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-right">
              <Button>Daftar Sekarang</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <img
            src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
            alt=""
          />
        </Col>
        <Col md={8} className="program-content">
          <Row>
            <Col>
              <h4 className="text-center">Program Donasi Title</h4>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                officiis.
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-right">
              <Button>Daftar Sekarang</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ListProgram;
