import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { fetchDetailDonasi } from "../Redux/detaildonasi/action";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { fetchOrder } from "../Redux/order/actions";
import { fetchToken } from "../Redux/token/action";

const Order = (props) => {
  const { register, handleSubmit, errors } = useForm();
  //   const [now, setNow] = useState(45);
  //   const refresh = () => {
  //     setInterval(() => {
  //       window.location.reload();
  //     }, 100);
  //   };

  const [nominal, setNominal] = useState("");
  const [ucapan, setUcapan] = useState("");

  const donasi = props.location.state.data;
  console.log(donasi);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(fetchToken());
    dispatch(fetchDetailDonasi(token, donasi.id));
    // dispatch(fetchDonasilist(token));
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const token = useSelector((state) => state.tokenReducer.token.token);
  // const donasilistData = useSelector(
  //   (state) => state.donasilistReducer.donasilist
  // );

  const onSubmit = (datas) => {
    let payload = [];
    let datax = [];
    if (datas === "") {
      errors.showMessage();
    } else {
      let username = localStorage.getItem("username");

      datax = {
        nominal: nominal,
        ucapan: ucapan,
        username: username,
      };
      payload = Object.assign(data, datax);
      dispatch(fetchOrder(token, payload));
    }
  };

  return (
    <div className="container order">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mt-3 justify-content-center">
          <Col md={8}>
            <h2>Halo Kak Alwy</h2>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col md={8}>
            <h4>Silahkan Melakukan Pembayaran Donasi </h4>
            <h3>{data.title}</h3>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
            {/* <span className="mr-2 text-bold">Nominal Donasi</span> */}
            {/* <NumberFormat
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix="Rp."
            /> */}
            <Form.Group controlId="formNominal">
              <Form.Label>Nominal Donasi</Form.Label>
              <Form.Control
                type="number"
                // placeholder="No. Hp"
                {...register("nominal", {
                  required: true,
                })}
                onChange={(e) => setNominal(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className=" mt-5 justify-content-center">
          <Col md={8}>
            <b>Kirim Pembayaran ke</b>
          </Col>
        </Row>
        <Row className=" mt-2 justify-content-center">
          {/* <Col md={8}>
          <Form.Check
            inline
            label="BNI"
            name="group1"
            type="radio"
            id={`inline-type-1`}
          />
          <Form.Check
            inline
            label="BCA"
            name="group1"
            type="radio"
            id={`inline-type-2`}
          />
        </Col> */}
          <Col md={8} className="donasi-amount-content">
            Rekening Mandiri Pemuda Peduli <br />
            <b>132-00-1858989-6 </b>
            <br />
            Yayasan Pemuda Peduli
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Tuliskan Ucapan dan Doa Untuk Penerima Manfaat
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Text" />
            </Form.Group> */}
            <Form.Group controlId="formUcapan">
              <Form.Label>
                Tuliskan Ucapan dan Doa Untuk Penerima Manfaat
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Text"
                {...register("ucapan", {
                  required: true,
                })}
                onChange={(e) => setUcapan(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center donasi-amount">
          <Col md={3} className="donasi-amount-content">
            {/* <Link
              to={{
                pathname: "/checkout",
                state: { donasi: data },
              }}
            >
              <Button>Konfirmasi Pembayaran</Button>
            </Link> */}
            <Button variant="primary" type="submit" block>
              Checkout
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Order;
