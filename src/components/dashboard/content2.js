import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const content2 = (props) => {

  const datas = props.data
  console.log(datas)

  return (
    <div className="content2">
        <Row className="p-2">
            <Col className="content-title">
                <div className="content-title-name">
                    <h4>Program Donasi</h4>
                    <h5>#CeritaDariJalanan</h5>
                </div>
                <Link to="/list-donasi-dua">Lihat lainnya</Link>
            </Col>
      </Row>
        {/* {data.thumbnail_image_url ? <img src={data.thumbnail_image_url} alt="" /> : <img src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="" />} */}
      <Row className="content-donasi">
        {datas.map((data, idx) => (
          <Col md={4} key={idx}>
            <Card>
                {data.thumbnail_image_url ? <Card.Img variant="top" src={data.thumbnail_image_url} /> : <Card.Img variant="top" src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg" alt="" />}
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    {/* <Card.Text>{data.description}</Card.Text> */}
                    {/* <Link to="/donasi-detail2"><Button>Donasi Sekarang</Button></Link> */}
                    <Link to={{
                                pathname: "/donasi-detail2",
                                state: { donasi: data }
                              }}><Button>Donasi Sekarang</Button></Link>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default content2;
