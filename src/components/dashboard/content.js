import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const content = (props) => {
  
  const datas = props.data

  console.log(datas,'data list donasi 1')

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
      {datas.map((data, idx) => (
        <Row className="content-donasi" key={idx}>
          <Col md={4} className="content-donasi-image">
            {data.thumbnail_image_url ? <img src={data.thumbnail_image_url} alt="" /> : <img src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="" />}
          </Col>
          <Col md={8} className="content-donasi-desc">
            <Row className="donasi-1">
              <Col md={12} className="donasi-title">
                <h5>{data.title}</h5>
              </Col>
              <Col md={12}className="donasi-desc">
                {data.description}
              </Col>
            </Row>
            <Row className="donasi-2">
              <Col className="daftar-sekarang">
                <Link to={{
                  pathname: "/donasi-detail",
                  state: { donasi: data }
                }}><Button>Donasi Sekarang</Button></Link>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default content;
