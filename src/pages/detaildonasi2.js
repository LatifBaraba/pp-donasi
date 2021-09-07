import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, ProgressBar, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailDonasi,
  fetchHistoryDonation,
  fetchAllHistoryDonation,
} from "../Redux/detaildonasi/action";
import { fetchPageDonasi } from "../Redux/pagelistdonasi/actions";
import NumberFormat from "react-number-format";
import CarouselCard from "react-multi-carousel";
import Moment from "react-moment";
import "react-multi-carousel/lib/styles.css";
import "./detaildonasi2.css";
import { CheckCircle } from "react-feather";

const DetailDonasi2 = (props) => {
  const [now, setNow] = useState(0);
  const username = localStorage.getItem("username");
  const refresh = () => {
    setInterval(() => {
      window.location.reload();
    }, 100);
  };
  const { donasi } = props.location.state;

  console.log(donasi, "donasi yeuh")
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    let percent = localStorage.getItem("percent");
    dispatch(fetchDetailDonasi(token, donasi.id));
    dispatch(fetchHistoryDonation(token, donasi.id));
    dispatch(fetchAllHistoryDonation(token));
    dispatch(fetchPageDonasi(token));
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const historydata = useSelector(
    (state) => state.donasiDetailReducer.historydata
  );
  const allhistorydata = useSelector(
    (state) => state.donasiDetailReducer.allhistorydata
  );

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  let from = new Date();
  let to = new Date(data.valid_to);
  // let Difference_In_Days = to.getUTCDate() - from.getUTCDate;

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

  const ucapandoaCarousel = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
            {/* Periode Donasi dari{" "}
            <i>
              <b>
                <Moment format="YYYY-MM-DD hh:mm:ss">
                  {moment(data.valid_from).format("YYYY-MM-DDTHH:mm:ss")}
                </Moment>
              </b>
            </i>{" "}
          -{" "}
            <i>
              <b>
                <Moment format="YYYY-MM-DD hh:mm:ss">
                  {moment(data.valid_to).format("YYYY-MM-DDTHH:mm:ss")}
                </Moment>
              </b>
            </i> */}
            <div className="article-status">
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
                  <span
                    style={{
                      color: " #828282",
                      marginLeft: "3px",
                      fontSize: "16px",
                    }}
                  >
                    Dari
                    <NumberFormat
                      className="ml-2"
                      value={data.target}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                    />
                  </span>
                </h2>
                {"Sisa " + (to.getUTCDate() - from.getUTCDate()) + " Hari"}
              </div>
              <div className="cardbox-stat mb-2 progressbar">
                <ProgressBar
                  animated
                  now={localStorage.getItem("percent" + data.id)}
                  label={`${localStorage.getItem("percent" + data.id)}%`}
                  className="donasi-progressbar"
                />
              </div>
              
              {/* <Moment fromNow ago>{data.valid_to}</Moment> */}
              
              {/* <div class="remain-txt remaining-day">
                <span class="total-dermawan">4.787 Dermawan</span>
                <span>
                  <strong>147 hari tersisa</strong>
                </span>
              </div> */}
            </div>
            <div className="article-button my-4" style={{ display: "flex" }}>
              <Col md={4}>
                {username ? (
                  <Link
                    to={{
                      pathname: "/order/" + data.id,
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
                      state: { data: donasi, uripath : window.location.pathname },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                )}
              </Col>
              {data.ayobantu_link !== "" && (
                <Col md={4}>
                  <a
                    href={data.ayobantu_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi di ayobantu.com</Button>
                  </a>
                </Col>
              )}
              {data.kitabisa_link !== "" && (
                <Col md={4}>
                  <a
                    href={data.kitabisa_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "auto" }}
                  >
                    <Button variant="primary">Donasi di kitabisa.com</Button>
                  </a>
                </Col>
              )}
            </div>
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
            <Link to="/history-donate">
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
            <Link  to={{
                    pathname: "/history-donate",
                    state: window.location.pathname 
                  }}>
              <Button>Lihat lainnya</Button>
            </Link>
          </Row>
          {/* <CarouselCard responsive={ucapandoaCarousel} arrows={false}>
            {historydata.map((data, idx) => (
              
            ))}
          </CarouselCard> */}
        </Col>
        {/* <Col md={2} className="mt-5">
          <h6 style={{ fontSize: "font-size: 1.75rem" }}>Lihat Lainnya</h6>
          <div></div>
        </Col> */}
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
                <Card.Text>
                  <ProgressBar
                    animated
                    now={localStorage.getItem("percent" + data.id)}
                    label={`${localStorage.getItem("percent" + data.id)}%`}
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
                <Card.Text style={{width:"10"}}>{data.penggalang_dana.Name ? data.penggalang_dana.Name : ''} 
                                                {' '}{data.penggalang_dana.Name && data.penggalang_dana.IsVerified ? 
                                                 <CheckCircle color="blue" style={{width:"15"}}></CheckCircle>
                                                : data.penggalang_dana.Name}</Card.Text>
                <Link
                  to={{
                    pathname: "/donasi-detail2/" + data.id,
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

export default DetailDonasi2;
