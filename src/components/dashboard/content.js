import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Content = (props) => {
  const [now, setNow] = useState(45);
  const datas = props.data;

  console.log(datas, "data list donasi 1");

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
            {data.thumbnail_image_url ? (
              <img src={data.thumbnail_image_url} alt="" />
            ) : (
              <img
                src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
                alt=""
              />
            )}
          </Col>
          <Col md={8}>
            {/* <Row className="donasi-1">
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
            </Row> */}
            <Card>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                {/* <Card.Text>{data.description}</Card.Text> */}
                {/* <Link to="/donasi-detail2"><Button>Donasi Sekarang</Button></Link> */}
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
                    pathname: "/donasi-detail/" + data.id,
                    state: { donasi: data },
                  }}
                >
                  <Button>Donasi Sekarang</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Content;
