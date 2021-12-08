import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Card,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddFundraiser } from "../../Redux/fundraiser/action";
// import { fetchToken, fetchRefreshToken } from "../../Redux/token/action";

const Fundraiser = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const [targetdonasi, setTargetDonasi] = useState(0);
  const [penggalangan, setPenggalangan] = useState("");
  const [link, setLink] = useState("");
  const [checkbox, setCheckbox] = useState("");
  // useEffect(() => {
  //   dispatch(fetchToken());
  // }, []);
  const onSubmit = () => {
    const payload = {
      id_donasi: props.location.state.data.id,
      target: targetdonasi,
      title: penggalangan,
      seo_url: link,
    };

    let token = localStorage.getItem("token");
    // let datax = [];
    // if (datas === "") {
    //   errors.showMessage();
    // } else {
    //   let username = localStorage.getItem("username");
    //   datax = {
    //     is_rutin:false,
    //     id_pp_cp_program_donasi: data.id,
    //     id_pp_cp_program_donasi_rutin: "",
    //     amount: parseInt(nominal),
    //     ucapan_dan_doa: ucapan,
    //     is_anonymous: anonim,
    //     payment_method: tipebayar,
    //   };
    //   // console.log(datax)
    dispatch(fetchAddFundraiser(token, payload));
    // }
  };

  return (
    <div>
      <div className="container detail-program">
        <div className="content">
          <div className="container list-program">
            <center>
              <div className="col-md-12">
                <div className="article-detail">
                  <div className="article-heading">
                    <b>
                      <h2
                        className="article-title"
                        style={{ color: "#696969" }}
                      >
                        {"Galang Dana Sebagai Fundraiser "}
                      </h2>
                    </b>
                  </div>
                  <hr />
                  <a>Dengan Menjadi Fundraiser,</a>
                  <br />
                  <a>kamu membantu menggalang dana ke penggalangan</a>
                  <br />
                  <b>
                    <a>{props.location.state.data.title}</a>
                  </b>
                  <hr />
                </div>
              </div>
            </center>
            <Form>
              <Row className="mt-5 justify-content-center donasi-amount">
                <Col md={8} className="donasi-amount-content">
                  <Form.Group controlId="formTargetDonasi">
                    <Form.Label>
                      <b>Target Donasi</b>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      defaultValue={`${targetdonasi}`}
                      // placeholder="No. Hp"
                      {...register("targetdonasi", {
                        required: true,
                      })}
                      onChange={(e) => setTargetDonasi(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                {/* </Row>
            <Row className="mt-5 justify-content-center donasi-amount"> */}
                <Col md={8} className="donasi-amount-content">
                  <Form.Group controlId="formNominal">
                    <Form.Label>
                      <b>Judul Penggalangan</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={`${penggalangan}`}
                      // placeholder="No. Hp"
                      {...register("penggalangan", {
                        required: true,
                      })}
                      onChange={(e) => setPenggalangan(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={8} className="donasi-amount-content">
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    <b>Link Tautan</b>
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>
                      <b>ayokitapeduli.com/</b>
                    </InputGroup.Text>
                    <FormControl
                      id="inlineFormInputGroup"
                      defaultValue={`${link}`}
                      {...register("link", {
                        required: true,
                      })}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={8} className="donasi-amount-content">
                  <Card
                    bg={"light"}
                    style={{ width: "43rem" }}
                    className="mb-2"
                    text={"dark"}
                  >
                    <Card.Body>
                      <Card.Text color>
                        Dengan menjadi fundraiser, saya tidak bisa mencairkan
                        dana yang terkumpul di penggalangan ini
                        <Form.Check
                          type="checkbox"
                          label="Ya, Saya Setuju"
                          {...register("checkbox", {
                            required: true,
                          })}
                        />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Link>
                    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundraiser;
