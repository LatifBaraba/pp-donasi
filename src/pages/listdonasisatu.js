import { React, useEffect, useState } from "react";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { fetchPageDonasi } from '../Redux/pagelistdonasi/actions'
import { fetchPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { useDispatch, useSelector } from "react-redux";

const ListProgram = () => {
  const [now, setNow] = useState(45);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPageDonasi(token));
    dispatch(fetchPagedonasi2(token));
  }, []);

  // const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);

  return (
    <div className="content">
      <div className="container list-program">
        {datas.map((data, idx) => (
          // <Row className="mt-3" key={idx}>
          //   <Col md={4}>
          //     {data.thumbnail_image_url ? (
          //       <img src={data.thumbnail_image_url} alt="" />
          //     ) : (
          //       <img
          //         src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
          //         alt=""
          //       />
          //     )}
          //   </Col>
          //   <Col md={8} className="program-content">
          //     <Row>
          //       <Col>
          //         <h4 className="text-center">{data.title}</h4>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col>
          //         <p>{data.sub_title}</p>
          //       </Col>
          //     </Row>
          //     <Row className="mt-3">
          //       <Col className="text-right">
          //         <Link
          //           to={{
          //             pathname: "/donasi-detail/" + data.id,
          //             state: { donasi: data },
          //           }}
          //         >
          //           <Button>Donasi Sekarang</Button>
          //         </Link>
          //       </Col>
          //     </Row>
          //   </Col>
          // </Row>
          <Row className="content-donasi" key={idx}>
            <Col md={4} className="content-donasi-image">
              {data.thumbnail_image_url ? (
                <img
                  src={data.thumbnail_image_url}
                  alt=""
                  style={{ width: "75%" }}
                />
              ) : (
                <img
                  src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
                  alt=""
                />
              )}
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  {/* <Card.Text>{data.description}</Card.Text> */}
                  {/* <Link to="/donasi-detail2"><Button>Donasi Sekarang</Button></Link> */}
                  {/* <Card.Text>
                    <ProgressBar
                      animated
                      now={now}
                      label={`${now}%`}
                      className="donasi-progressbar"
                    />
                  </Card.Text> */}
                  <Card.Text>
                    <div className="dana-terkumpul">
                      Rp 3.170.000 terkumpul dari Rp 150.000.000
                    </div>
                  </Card.Text>
                  <Card.Text>Nama Penggalang Dana</Card.Text>
                  <Row className="mt-3">
                    <Col className="text-right">
                      <Link
                        to={{
                          pathname: "/donasi-detail/" + data.id,
                          state: { donasi: data },
                        }}
                      >
                        <Button>Donasi Sekarang</Button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default ListProgram;
