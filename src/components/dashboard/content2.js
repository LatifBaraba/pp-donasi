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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { fetchDetailDonasi } from "../../Redux/detaildonasi/action";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle } from "react-feather";

const Content2 = (props) => {
  // const [now, setNow] = useState(0);
  const [item, setItem] = useState();
  const [icon, setIcon] = useState(
    <CheckCircle color="blue" style={{ width: "15" }}></CheckCircle>
  );
  const datas = props.data;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   dispatch(fetchDetailDonasi(token, datas.id));
  // }, []);
  // const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);

  const onSubmitSearch = (e) => {
    console.log(e.target.value);
  };

  const onSubmitSelect = (e) => {
    console.log(e);
  };
  return (
    <div className="content2">
      <Row className="p-2">
        <Col className="content-title">
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Text input with dropdown button"
              placeholder="Search"
              onChange={onSubmitSearch}
            />

            <DropdownButton
              variant="outline-secondary"
              title="Kategori"
              id="input-group-dropdown-2"
              align="end"
              onSelect={onSubmitSelect}
            >
              <Dropdown.Item eventKey="pendidikan">Pendidikan</Dropdown.Item>
              <Dropdown.Item eventKey="kesehatan">Kesehatan</Dropdown.Item>
              <Dropdown.Item eventKey="bencana">Bencana</Dropdown.Item>
              <Dropdown.Item eventKey="lainlain">Lain - Lain</Dropdown.Item>
            </DropdownButton>
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
