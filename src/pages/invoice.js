import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { fetchOrderRutin } from "../Redux/order-rutin/actions";
import { fetchOrder } from "../Redux/order/actions";

const Order = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { donasi } = props.location.state;
      
  const [nominal, setNominal] = useState(donasi[1]);
  const [ucapan, setUcapan] = useState("");
  const [tipebayar, setTipeBayar] = useState(donasi[2]);

  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  // console.log(donasi)
  const onSubmit = (datas) => {
    let datax = [];
    if (datas === "") {
      errors.showMessage();
    } else {
      let username = localStorage.getItem("username");

      if (donasi[3] === false) {
        datax = {
          is_rutin: false,
          id_pp_cp_program_donasi: donasi[0].id,
          id_pp_cp_program_donasi_rutin: "",
          amount: parseInt(nominal),
          payment_method: tipebayar,
        };
        dispatch(fetchOrder(token, datax));
      } else {
        datax = {
          is_rutin: true,
          id_pp_cp_program_donasi: "",
          id_pp_cp_program_donasi_rutin: donasi[0].id,
          amount: parseInt(nominal),
          payment_method: tipebayar,
        };
        dispatch(fetchOrderRutin(token, datax));
      }
    }
  };
  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);

  return (
    <div className="container order">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mt-5 justify-content-center">
          <Col md={8}>
            <h1>
              <center>
                <b>INVOICE DONASI</b>
              </center>{" "}
            </h1>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
            <h3>
              <center>Pembayaran</center>{" "}
            </h3>
            <h5>
              <center>Invoice ID : PP123456789</center>{" "}
            </h5>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
            <h6>
              <center>Total Tagihan</center>{" "}
            </h6>
            <h3>
              <center>
                <b>
                  <NumberFormat
                    value={donasi[1]}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp. "}
                  />
                </b>
              </center>{" "}
            </h3>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
            <h6>
              <center>
                Transfer Melalui
                <br />
                <br />
              </center>
            </h6>
            {donasi[2] === "Manual" ? (
              <div>
                <h6>
                  <center>
                    Rekening Mandiri Pemuda Peduli <br />
                    <br />
                    <b>132-00-1858989-6 </b>
                    <br />
                    <br />
                    a.n Yayasan Pemuda Peduli
                  </center>
                </h6>
                <br />
                <br />
              </div>
            ) : (
              <Row></Row>
            )}
            {donasi[2] === "Qris" ? (
              <div>
                <center>
                  <img
                    src={donasi[0].qris_image_url}
                    alt=""
                    style={{ width: "50%" }}
                  />
                </center>
                <br />
              </div>
            ) : (
              <Row></Row>
            )}
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center donasi-amount">
          {/* <Col md={3} className="donasi-amount-content">
          <Link
            to={{
              pathname: "/confirm",
            }}
          > */}
          <Button type="submit">Checkout</Button>
          {/* </Link>
        </Col> */}
        </Row>
        {/* <Row className="mt-5 justify-content-center donasi-amount">
    <Card.Img variant="top" src={InvoiceDonasi} style={{ width: "20rem" }} />
    </Row> */}
        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8}>
          {donasi[2] === "Manual" ? (
            <div>
            <h3>Panduan Pembayaran</h3>
            <br />
            <b>Melalui Internet/Mobile Banking</b>
            <br />
            1. Buka aplikasi internet banking Anda.
            <br />
            2. Masukkan id dan password Anda.
            <br />
            3. Pilih Opsi <b>Transfer antarbank</b>
            <br />
            4. Masukkan identitas bank tujuan, nominal donasi dan informasi
            lainnya.
            <br />
            5. Pastikan detail tagihan Anda sudah benar, kemudian pilih{" "}
            <b>OK</b> atau <b>LANJUT</b>.<br />
            6. Masukan pin transaksi Anda.
            <br />
            7. Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti
            pembayaran.
            <br />
            <br />
            <br />
            <b>Transfer Bank</b>
            <br />
            1. Masukkan kartu ATM dan PIN Anda.
            <br />
            2. Pilih menu <b>Transfer Antar Bank</b>.<br />
            3. Pilih Kode Bank yang dimaksud <b>008</b>.<br />
            4. Masukan nomor rekening Pemuda Peduli yang dimaksud serta masukan
            jumlah donasi.
            <br />
            5. Pastikan detail tagihan Anda sudah benar, kemudian lanjutkan
            pembayaran.
            <br />
            6. Transaksi Anda sudah selesai, simpan struk transaksi sebagai
            bukti pembayaran. <br />
            <br />
            <br />
            <br />
            <br />
            </div>
          ) : (<Col></Col>)
          }
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Order;
