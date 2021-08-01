import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Dropdown, MenuItem } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { fetchDetailDonasi } from "../Redux/detaildonasi/action";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { fetchOrder } from "../Redux/order/actions";
import { fetchToken, fetchRefreshToken } from "../Redux/token/action";

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
  const [tipebayar, setTipeBayar] = useState("");

  const donasi = props.location.state.data;
  console.log(donasi);

  let token = localStorage.getItem("token");    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailDonasi(token, donasi.id));
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  
  const onSubmit = (datas) => {
    let datax = [];    
    if (datas === "") {
      errors.showMessage();
    } else {
      let username = localStorage.getItem("username");

      datax = {
        is_rutin:false,
        id_pp_cp_program_donasi: data.id,
        id_pp_cp_program_donasi_rutin: "",
        amount: parseInt(nominal),
        payment_method: tipebayar,
      };      
      dispatch(fetchOrder(token, datax));
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
            <Form.Group controlId="formTipeBayar">
              <Form.Control
                required
                as="select"
                type="select"
                onChange={(e) => setTipeBayar(e.target.value)}      
                // {...register("tipebayar", {
                //   required: true,
                // })}          
                
              >
                <option value="">Pilih Pembayaran</option>
                <option value="Manual">Rekening Mandiri</option>
                <option value="Qris">QRIS</option>
              </Form.Control>
              
            </Form.Group>
          </Col>
        </Row>                
        {tipebayar === "Manual" ? (
          <Row className=" mt-2 justify-content-center">
            <Col md={8}>
              <b>Silahkan Transfer Donasi ke</b>
            </Col>
            <Col md={8} className="donasi-amount-content">
              Rekening Mandiri Pemuda Peduli <br />
              <b>132-00-1858989-6 </b>
              <br />
              Yayasan Pemuda Peduli
            </Col>
          </Row>
        ):(<Row></Row>)} 
        {tipebayar === 'Qris' ? (
          <Row className=" mt-5 justify-content-center">
            <Col md={8}>
            <img src={data.qris_image_url} alt="" style={{ width: "50%" }} />            
            </Col>
          </Row>
        ): (<Row></Row>)}

        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
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
