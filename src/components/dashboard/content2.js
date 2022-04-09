import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  ProgressBar,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Nav,
  ToggleButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { fetchDetailDonasi } from "../../Redux/detaildonasi/action";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle } from "react-feather";
import {
  fetchDonasilist,
  fetchDonasiSearch,
  fetchKategoriProgramDonasi,
} from "../../Redux/donasilist/actions";
import { findAllByTestId } from "@testing-library/react";

const Content2 = (props) => {
  const dispatch = useDispatch();
  // const [now, setNow] = useState(0);
  const [item, setItem] = useState();
  const [icon, setIcon] = useState(
    <CheckCircle color="blue" style={{ width: "15" }}></CheckCircle>
  );

  const [searchstate, setSearchState] = useState();

  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeButton1, setActiveButton1] = useState(true);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [noActiveButton, setNoActiveButton] = useState();

  const datas = props.data;

  const token = localStorage.getItem("token");

  const handleSearch = (e) => {
    setSearchState(e.target.value);
    dispatch(fetchDonasiSearch(token, e.target.value));
  };

  const searchdata = useSelector(
    (state) => state.donasilistReducer.donasisearch
  );

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 100);
  }

  const handleActiveIndex = (val, kategori_name) => {
    setActiveIndex(val);
    if (val === -1) {
      setNoActiveButton(val)
      setActiveButton1(true);
      dispatch(fetchDonasilist(token, kategori_name))
    } else {
      setActiveButton(true);
      setNoActiveButton(val)
      dispatch(fetchDonasilist(token, kategori_name));
    }
  };

  useEffect(() => {
    dispatch(fetchDonasilist(token, ''))
    dispatch(fetchKategoriProgramDonasi(token))
  }, [token])
  

  const semuaKategoriData = useSelector(
    (state) => state.donasilistReducer.donasilist
  );

  const kategoriData = useSelector(
    (state) => state.donasilistReducer.donasikategori
  );

  const kategoriListData = useSelector(
    (state) => state.donasilistReducer.donasilist
  );

  return (
    <div className="content2">
      <Nav className="justify-content-center">
        <Nav.Item>
          <Button
            variant="outline-primary"
            style={{ marginRight: "10px", borderRadius: "20px" }}
            onClick={() => handleActiveIndex(-1, '')}
            active={-1 === noActiveButton ? activeButton1 : false}
          >
            Semua
          </Button>{" "}
        </Nav.Item>
        {kategoriData.map((data, idx) => (
          <Nav.Item>
            <Button
              variant="outline-primary"
              style={{ marginRight: "10px", borderRadius: "20px" }}
              onClick={() => handleActiveIndex(idx, data.name)}
              active={idx === noActiveButton ? activeButton : false}
            >
              {data.name}
            </Button>{" "}
          </Nav.Item>
        ))}
      </Nav>

      {activeIndex === -1 ? (
        <div>
          <Row className="p-2">
            <Col className="content-title"></Col>
            <Col className="content-title"></Col>
            <Col className="content-title">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Cari donasi. . ."
                  aria-label="Cari donasi. . ."
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="p-2">
            <Col className="content-title">
              <div className="content-title-name">
                <h4>Program Donasi</h4>
                <h5>#CeritaDariJalanan</h5>
              </div>
              <Link to="/list-donasi-dua">Lihat lainnya</Link>
            </Col>
          </Row>
          <Row className="content-donasi">
            {searchstate === undefined || searchstate.length === 0 ? (
              semuaKategoriData.map((data, idx) => (
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
                      <Card.Text>
                        <ProgressBar
                          animated
                          now={localStorage.getItem("percent" + data.id)}
                          label={`${localStorage.getItem(
                            "percent" + data.id
                          )}%`}
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
                        {data.penggalang_dana.Name
                          ? data.penggalang_dana.Name
                          : ""}{" "}
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
                        // onClick={refreshPage}
                      >
                        <Button>Donasi Sekarang</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : searchstate && searchdata.length !== 0 ? (
              searchdata.map((data, idx) => (
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
                      <Card.Text>
                        <ProgressBar
                          animated
                          now={localStorage.getItem("percent" + data.id)}
                          label={`${localStorage.getItem(
                            "percent" + data.id
                          )}%`}
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
                        {data.penggalang_dana.Name
                          ? data.penggalang_dana.Name
                          : ""}{" "}
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
                        // onClick={refreshPage}
                      >
                        <Button>Donasi Sekarang</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : searchstate && searchdata.length === 0 ? (
              <div>
                <b>
                  <center>Donasi Tidak Ditemukan</center>
                </b>
              </div>
            ) : (
              ""
            )}
          </Row>
        </div>
      ) : (
        <div>
          <Row className="p-2">
            <Col className="content-title"></Col>
            <Col className="content-title"></Col>
            <Col className="content-title">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Cari donasi. . ."
                  aria-label="Cari donasi. . ."
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="p-2">
            <Col className="content-title">
              <div className="content-title-name">
                <h4>Program Donasi</h4>
                <h5>#CeritaDariJalanan</h5>
              </div>
              <Link to="/list-donasi-dua">Lihat lainnya</Link>
            </Col>
          </Row>
          <Row className="content-donasi">
            {searchstate === undefined || searchstate.length === 0 ? (
              kategoriListData.map((data, idx) => (
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
                      <Card.Text>
                        <ProgressBar
                          animated
                          now={localStorage.getItem("percent" + data.id)}
                          label={`${localStorage.getItem(
                            "percent" + data.id
                          )}%`}
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
                        {data.penggalang_dana.Name
                          ? data.penggalang_dana.Name
                          : ""}{" "}
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
                        <Button>Donasi Sekarang</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : searchstate && searchdata.length !== 0 ? (
              searchdata.map((data, idx) => (
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
                      <Card.Text>
                        <ProgressBar
                          animated
                          now={localStorage.getItem("percent" + data.id)}
                          label={`${localStorage.getItem(
                            "percent" + data.id
                          )}%`}
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
                        {data.penggalang_dana.Name
                          ? data.penggalang_dana.Name
                          : ""}{" "}
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
                        <Button>Donasi Sekarang</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : searchstate && searchdata.length === 0 ? (
              <div>
                <b>
                  <center>Donasi Tidak Ditemukan</center>
                </b>
              </div>
            ) : (
              ""
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Content2;
