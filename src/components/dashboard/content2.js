import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { fetchDetailDonasi } from "../../Redux/detaildonasi/action";
import { useDispatch, useSelector } from "react-redux";

const Content2 = (props) => {
  const [now, setNow] = useState(0);
  const datas = props.data;
  
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");   
    dispatch(fetchDetailDonasi(token, datas.id));
  }, []);
  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);  
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
                {/* <Card.Text>{data.description}</Card.Text> */}
                {/* <Link to="/donasi-detail2"><Button>Donasi Sekarang</Button></Link> */}
                <Card.Text>
                  <ProgressBar
                    animated
                    now={localStorage.getItem("percent"+data.id)}
                    label={`${localStorage.getItem("percent"+data.id)}%`}
                    className="donasi-progressbar"
                    style={{ height: "10px", backgroundImage: "blue" }}
                  />
                </Card.Text>
                <Card.Text>
                  <div className="dana-terkumpul">
                    <NumberFormat
                      value={data.donation_collect}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                    />{" "}
                    terkumpul dari
                    <NumberFormat
                      value={data.target}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={" Rp. "}
                    />
                  </div>
                </Card.Text>
                {/* <Card.Text>Nama Penggalang Dana</Card.Text> */}

                <Link
                  to={{
                    pathname: "/donasi-detail2/" + data.id,
                    state: { donasi: data },
                  }}
                >
                  <Button>Donasi Sekarang</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Content2;
