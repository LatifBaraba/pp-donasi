import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, ProgressBar, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailDonasi,
  fetchHistoryDonation,
  fetchAllHistoryDonation,
} from "../../Redux/detaildonasi/action";
import { fetchPageDonasi } from "../../Redux/pagelistdonasi/actions";
import NumberFormat from "react-number-format";
import CarouselCard from "react-multi-carousel";
import Moment from "react-moment";
import "react-multi-carousel/lib/styles.css";
import "./detaildonasi2.css";
import { CheckCircle } from "react-feather";
import { fetchDonasiOneTimeBySeo } from "../../Redux/donasilist/actions";
import { fetchFundraiserByDonasi, fetchFundraiserBySeo } from "../../Redux/fundraiser/action";
import { fetchToken, fetchRefreshToken } from "../../Redux/token/action";

const DetailFundraiser = (props) => {
//   console.log();
//   const [now, setNow] = useState(0);
  const username = localStorage.getItem("username");
  const refresh = () => {
    setInterval(() => {
      window.location.reload();
    }, 100);
  };
//   const { donasi } = props.location.state;
  const { id } = useParams();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer.token.token);
  useEffect(() => {
   

    if (token == undefined) {
      dispatch(fetchToken());
      setTimeout(() => {
        let tokens = localStorage.getItem("token");
        // console.log(" detail donasi ", tokens);
        // dispatch(fetchDonasiRutinBySeo(tokens, id));
        // dispatch(fetchDonasiOneTimeBySeo(tokens, id));
        // dispatch(fetchFundraiserByDonasi(tokens, donasi.id));
        // dispatch(fetchAllHistoryDonation(tokens));
        // dispatch(fetchPageDonasi(tokens));
        dispatch(fetchFundraiserBySeo(tokens, id));
      }, 2000);
    } else {
      // console.log("detail ", token);
      // dispatch(fetchDonasiOneTimeBySeo(token, id));
      // dispatch(fetchFundraiserByDonasi(token, donasi.id));
      // dispatch(fetchAllHistoryDonation(token));
      dispatch(fetchFundraiserBySeo(token, id));
    }
  }, []);

    const databyseo = useSelector((state) => state.fundraiserReducer.fundraiserbyseo);

//   const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const kabarterbaru = useSelector(
    (state) => state.kabarTerbaruReducer.kabarterbaruot
  );

//   const datas = useSelector((state) => state.pagedonasiReducer.pagedonasi);
  const historydata = useSelector(
    (state) => state.donasiDetailReducer.historydata
  );
//   console.log(historydata.length);
//   const allhistorydata = useSelector(
//     (state) => state.donasiDetailReducer.allhistorydata
//   );

//   const datafundraiser = useSelector(
//     (state) => state.fundraiserReducer.fundraiserbydonate
//   );

//   console.log(datafundraiser);

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // console.log(databyseo);

  let from = new Date();
  let to = new Date(databyseo.valid_to);
//   // let Difference_In_Days = to.getUTCDate() - from.getUTCDate;

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

  
  return (
    <div className="container detail-program">
        {/* Halaman seo */}
        {/* {props.data} */}
      <div className="row row-mb-5" style={{ display: "flex" }}>
        <div className="col-md-6" style={{ width: "50%" }}>
          <div className="article-content">
            <div className="article-media">
              <img
                src={databyseo.thumbnail_image_url}
                className="article-image img-1"
                alt=""
              />
            </div>
            <div className="article-summary">
              <p className="os-12 txt-600">{databyseo.title}</p>
            </div>
            <div className="article-action"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="article-detail">
            <div className="article-heading">
              <h2 className="article-title">{databyseo.title}</h2>
            </div>
            <div>
              {isReadMore
                ? databyseo.description && databyseo.description.slice(0, 150)
                : databyseo.description}
              {databyseo.description && databyseo.description.length < 150 ? (
                ""
              ) : (
                <span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? "...read more" : " show less"}
                </span>
              )}
            </div>
           
            <div className="article-status">
              <span className="os-13 txt-600 text-terkumpul">Target </span>
              <div className="article-number campaign-donate">
                <h2>
                  <NumberFormat
                    className="mr-2"
                    value={databyseo.donation_collect}
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
                      value={databyseo.target}
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
                  now={localStorage.getItem("percent" + databyseo.id)}
                  label={`${localStorage.getItem("percent" + databyseo.id)}%`}
                  className="donasi-progressbar"
                />
              </div>

            </div>
            <div className="article-button my-4" style={{ display: "flex" }}>
              <Col md={4}>
                {username ? (
                  <Link
                    to={{
                      pathname: "/orderfund/" + databyseo.seo_url,
                      state: { data: databyseo },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/login",
                      state: { data: databyseo, uripath: window.location.pathname },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi Sekarang</Button>
                  </Link>
                )}
              </Col>
              {databyseo.ayobantu_link !== "" && (
                <Col md={4}>
                  <a
                    href={databyseo.ayobantu_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <Button variant="primary">Donasi di ayobantu.com</Button>
                  </a>
                </Col>
              )}
              {databyseo.kitabisa_link !== "" && (
                <Col md={4}>
                  <a
                    href={databyseo.kitabisa_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "auto" }}
                  >
                    <Button variant="primary">Donasi di kitabisa.com</Button>
                  </a>
                </Col>
              )}
              {/* <Col md={4}>
                {username ? (
                  <Link
                    to={{
                      pathname: "/fundraiser",
                      state: { data: databyseo, uripath: window.location.pathname },
                    }}
                  >
                    <Button>Jadi Fundraiser</Button>
                  </Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/login",
                      state: { data: databyseo, uripath: window.location.pathname },
                    }}
                    className="mr-2"
                  >
                    <Button variant="primary">Jadi Fundraiser</Button>
                  </Link>
                )}
              </Col> */}
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
                  <strong>{databyseo.title}</strong>
                </h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: databyseo.content }} />
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
              {data.ucapan_dan_doa ? (
                <Card>
                  <Card.Header>
                    {data.is_anonymous ? "Anonim" : data.username}
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <h6> {data.ucapan_dan_doa} </h6>
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
              ) : (
                ""
              )}
              <br />
            </div>
          ))}
     
        </Col>
        <Col md={6} className="mt-5">
          <h3 style={{ fontSize: "font-size: 1.75rem" }}>
            Donasi ({historydata.length})
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
            <Link
              to={{
                pathname: "/history-donate/" + databyseo.id,
                state: window.location.pathname,
              }}
            >
              <Button>Lihat lainnya</Button>
            </Link>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="mt-5"></Col>
        <Col md={6} className="mt-5">
          <h3 style={{ fontSize: "font-size: 1.75rem" }}>
            Kabar Terbaru ({kabarterbaru.length})
          </h3>

          <div></div>
          {kabarterbaru.slice(0, 1).map((data, idx) => (
            <div>
              <Card
                bg={"secondary"}
                text={"secondary" === "light" ? "dark" : "white"}
                style={{ width: "30rem", alignContent: "center" }}
                className="mb-2"
              >
             
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h4>
                      <Card.Text>{data.title}</Card.Text>
                    </h4>
                    <h6>
                      <Card.Text>
                        <div className="dana-terkumpul">
                          <Moment fromNow>{data.created_at}</Moment>
                        </div>
                      </Card.Text>
                    </h6>
                    <h6>
                      <Card.Text>
                        Pencairan Dana Sebesar
                        <b>
                          <NumberFormat
                            value={data.disbursement_balance}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={" Rp. "}
                          />
                          .~
                        </b>
                      </Card.Text>
                    </h6>
                    <h6>
                      <Card.Text>
                        <p>
                          ke Rekening {data.disbursement_bank_name}{" "}
                          {data.disbursement_account}
                        </p>
                        <p>a/n {data.disbursement_name}</p>
                        <p>
                          Rencana Penggunaan Pencairan :{" "}
                          {data.disbursement_description}
                        </p>
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
            <Link
              to={{
                pathname: "/kabar-terbaru-ot/" + databyseo.id,
                state: window.location.pathname,
              }}
            >
              <Button>Lihat lainnya</Button>
            </Link>
          </Row>
        </Col>
      </Row>
      {/* <Row>
        <Col md={3} className="mt-5"></Col>
        <Col md={6} className="mt-5">
          <h3 style={{ fontSize: "font-size: 1.75rem" }}>Fundraiser</h3>
          <div></div>
          {datafundraiser.slice(0, 1).map((data, idx) => (
            <div>
              <Card>
                <Card.Body>
                  <b>
                    <a style={{ color: "#48c78e" }}>{data.title}</a>
                  </b>
                  <br />
                  <a>{data.nama_lengkap}</a>
                  <br />
                  <a style={{ color: "#b3b5b4" }}>Mengajak 125 Orang</a>
                  <br />
                  <NumberFormat
                    className="mr-2"
                    value={data.donation_collect}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Donasi Terkumpul Rp. "}
                  />
                
                  <hr />
                  <Row className="text-justify justify-content-center">
                    <Link
                      to={{
                        pathname: "/fundraiser/" + data.id_pp_cp_program_donasi,
                        state: window.location.pathname,
                      }}
                    >
                      <Button>Lihat lainnya</Button>
                    </Link>
                   
                  </Row>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
      <Row className="mt-5 text-justify">
        <Col md={8}>
          <h3>Kamu juga bisa berdonasi yang lain :</h3>
        </Col>
      </Row> */}
      {/* <CarouselCard responsive={responsive}>
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
                
                <Card.Text style={{ width: "10" }}>
                  {data.penggalang_dana.Name ? data.penggalang_dana.Name : ""}{" "}
                  {data.penggalang_dana.Name &&
                  data.penggalang_dana.IsVerified ? (
                    <CheckCircle
                      color="blue"
                      style={{ width: "15" }}
                    ></CheckCircle>
                  ) : (
                    data.penggalang_dana.Name
                  )}
                </Card.Text>
                <Link
                  to={{
                    pathname: "/otime/" + data.seo_url,
                    state: { donasi: data },
                  }}
                >
                  <Button onClick={refresh}>Donasi Sekarang</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </CarouselCard> */}
    </div>
  );
};

export default DetailFundraiser;
