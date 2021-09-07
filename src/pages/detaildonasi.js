import React, { useState, useEffect } from "react";
import { Row, Col, ProgressBar, Card, Button, Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailDonasiRutin, fetchHistoryRutinDonation, fetchAllHistoryRutinDonation} from "../Redux/detaildonasi/action";
import { fetchPagedonasi2, fetchPaketPagedonasi2 } from "../Redux/pagelistdonasi2/actions";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import CarouselCard from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DetailDonasi = (props) => {
  const [now, setNow] = useState(45);
  const username = localStorage.getItem("username");
  const refresh = () => {
    setInterval(() => {
      window.location.reload();
    }, 100);
  };
  const { donasi } = props.location.state;

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(fetchDetailDonasiRutin(token, donasi.id));
    dispatch(fetchPagedonasi2(token));
    dispatch(fetchPaketPagedonasi2(token, donasi.id));
    dispatch(fetchAllHistoryRutinDonation(token));
    dispatch(fetchHistoryRutinDonation(token, donasi.id));
  }, []);
  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const datas = useSelector((state) => state.pagedonasi2Reducer.pagedonasi2);
  const datapaket = useSelector((state) => state.pagedonasi2Reducer.paketpagedonasi2);
  const historydata = useSelector(
    (state) => state.donasiDetailReducer.historydata
  );
  const allhistorydata = useSelector(
    (state) => state.donasiDetailReducer.allrutinhistorydata
  );
  console.log(datapaket)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }
  return (
    <div className="container detail-program">
      <div className="row row-mb-5" style={{ display: "flex" }}>
        <div className="col-md-6" style={{ width: "50%" }}>
          <div className="article-content">
            <div className="article-media">
              <img
                src={data.thumbnail_image_url}
                className="article-image img-1"
                alt=""
              />
            </div>
            <div className="article-summary">
              <p className="os-12 txt-600">{data.title}</p>
            </div>
            <div className="article-action"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="article-detail">
            <div className="article-heading">
              <h2 className="article-title">{data.title}</h2>
            </div>
            <div>
              {isReadMore
                ? data.description && data.description.slice(0, 150)
                : data.description}
              {data.description && data.description.length < 150 ? (
                ""
              ) : (
                <span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? "...read more" : " show less"}
                </span>
              )}
            </div>
            {/* <div className="article-status">
              <span className="os-13 txt-600 text-terkumpul">Target </span>
              <div className="article-number campaign-donate">
                <h2>
                  <NumberFormat
                    className="mr-2"
                    value={data.donation_collect}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp. "}
                  />
                </h2>
              </div>
            </div> */}
            {/* <div className="article-button my-4" style={{ display: "flex" }}>
              <Col md={4}>
                {username ? (
                  <Link
                    to={{
                      pathname: "/order-rutin/" + data.id,
                      state: { data: donasi },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/login",
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                )}
              </Col>              
            </div> */}
          </div>
        </div>
      </div>
      <Row
        className="mt-4 text-justify justify-content-center"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <Col md={12} style={{ border: "4px" }}>
          <Card>
            <div className="container">
              <div className="mb-3">
                <h2>
                  <strong>{data.title}</strong>
                </h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </Card>
        </Col>
        <hr></hr>
      </Row>
      <Row className="mt-5 text-justify">
        <Col md={8}>
          <h3>Paket Donasi :</h3>
        </Col>
      </Row>
      <CarouselCard responsive={responsive}>
        {datapaket.map((data, idx) => (
          <Col key={idx}>
            <Card>
              {data.paket_image_url ? (
                <Card.Img variant="top" src={data.paket_image_url} />
              ) : (
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg"
                  alt=""
                />
              )}
              <Card.Body>
                <Card.Title>{data.paket_name}</Card.Title>
                {/* <Card.Text>Nama Penggalang Dana</Card.Text> */}

                {/* <Link
                  to={{
                    pathname: "/order-rutin/" + data.id,
                    state: { donasi: data },
                  }}
                >
                  <Button onClick={refresh}>Donasi Sekarang</Button>
                </Link> */}
                

                {username ? (
                  <Link
                    to={{
                      pathname: "/order-rutin/" + data.id,
                      state: { data: data },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/login",
                      state: { data: donasi, uripath : window.location.pathname },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                )}


              </Card.Body>
            </Card>
          </Col>
        ))}
      </CarouselCard>
      <Row>
        <Col md={6} className="mt-5">
          <h3 style={{ fontSize: "font-size: 1.75rem" }}>Ucapan dan Doa </h3>
          <div></div>
          {historydata.slice(0, 3).map((data, idx) => (
            <div>
              {data.ucapan_dan_doa ? <Card>
                <Card.Header>{data.is_anonymous ? "Anonim" : data.username}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h6>
                      {" "}
                      {data.ucapan_dan_doa}{" "}
                    </h6>
                    <h6>
                      <footer className="blockquote-footer">
                        <cite title="Source Title"><Moment fromNow>{data.paid_at}</Moment></cite>
                      </footer>
                    </h6>
                  </blockquote>
                </Card.Body>
              </Card> : ''}
              <br />
            </div>
          ))}
          <Row className="mt-4 text-justify justify-content-center">
            <Link to="/rutin-history-donate">
              <Button>Lihat lainnya</Button>
            </Link>
          </Row>
        </Col>
        <Col md={6} className="mt-5">
          <h3 style={{ fontSize: "font-size: 1.75rem" }}>
            Donasi ({allhistorydata.length})
          </h3>

          <div></div>
          {historydata.slice(0, 3).map((data, idx) => (
            <div>
              <Card>
                <Card.Header>{data.username}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h6>
                      <Card.Text>
                        <div className="dana-terkumpul">
                          Berdonasi sebesar
                          <NumberFormat
                            value={data.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={" Rp. "}
                          />
                        </div>
                      </Card.Text>
                    </h6>
                    <h6>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">
                          <Moment fromNow>{data.paid_at}</Moment>
                        </cite>
                      </footer>
                    </h6>
                  </blockquote>
                </Card.Body>
              </Card>
              <br />
            </div>
          ))}
          <Row className="mt-4 text-justify justify-content-center">
            <Link to="/rutin-history-donate">
              <Button>Lihat lainnya</Button>
            </Link>
          </Row>
          {/* <CarouselCard responsive={ucapandoaCarousel} arrows={false}>
            {historydata.map((data, idx) => (
              
            ))}
          </CarouselCard> */}
        </Col>
      </Row>
      {/* <Row className="text-justify justify-content-center">
        <Col md={8}>
          Arief Ramdhani - "Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old."
        </Col>
      </Row> */}
      <Row className="mt-5 text-justify">
        <Col md={8}>
          <h3>Kamu juga bisa berdonasi yang lain :</h3>
        </Col>
      </Row>
      <CarouselCard responsive={responsive}>
        {datas.map((data, idx) => (
          <Col key={idx}>
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
                {/* <Card.Text>Nama Penggalang Dana</Card.Text> */}

                <Link
                  to={{
                    pathname: "/donasi-detail/" + data.id,
                    state: { donasi: data },
                  }}
                >
                  <Button onClick={refresh}>Donasi Sekarang</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </CarouselCard>
    </div>
  );
};

export default DetailDonasi;
