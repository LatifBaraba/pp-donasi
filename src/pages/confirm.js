import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Row, Container, Form, Col } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchAddConfirm } from "../Redux/confirm/action";
import { fetchToken } from "../Redux/token/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "../helper/index";

const Confirm = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const passwords = useRef({});
  passwords.current = watch("password", "");

  const [tipebayar, setTipebayar] = useState("");
  const [nama, setNama] = useState("");
  const [norekening, setNorekening] = useState("");
  const [tanggalbayar, setTanggalBayar] = useState("");
  const [nominal, setNominal] = useState("");
  const [bukti, setBukti] = useState("");

  useEffect(() => {
    dispatch(fetchToken());
  }, []);

  const token = useSelector((state) => state.tokenReducer.token.token);
  const onSubmit = (data) => {

    if (data !== '') {
        uploadImage(bukti).then(message => {
            const newIcon = message.response.data.url;
            dispatch(fetchAddConfirm(token, tipebayar, nama, norekening, tanggalbayar, nominal, newIcon))
        })
        .catch(error => {
            ToastContainer.error("Upload Image Failed !");
        })
    } else {
        errors.showMessages();
    }

  };
  return (
    <div className="checkout container">
      <Row className="mt-3">
        <Col>
          <center>
            <h2>Konfirmasi Pembayaran Donasi</h2>
          </center>
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-md-center">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formNominal">
            <Form.Control
              as="select"
              custom
              onChange={(e) => setTipebayar(e.target.value)}
              {...register("tipebayar", {
                required: true,
              })}
            >
              <option value="mandiri">Rekening Mandiri</option>
              <option value="qris">QRIS</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicNama">
            <Form.Control
              placeholder="Nama"
              {...register("nama", {
                required: true,
              })}
              onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNoRekening">
            <Form.Control
              placeholder="No Rekening"
              {...register("no_rekening", {
                required: true,
              })}
              onChange={(e) => setNorekening(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicTangalBayar">
            <Form.Control
              placeholder="Tanggal Bayar"
              {...register("tanggabayar", {
                required: true,
              })}
              onChange={(e) => setTanggalBayar(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNominal">
            <Form.Control
              type="number"
              placeholder="Nominal"
              {...register("nominal", {
                required: true,               
              })}
              onChange={(e) => setNominal(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group controlId="formBasicNoHandphone">
            <Form.Control
              placeholder="No Handphone"
              type="number"
              {...register("no_hp", {
                required: true,
              })}
              onChange={(e) => setNoHp(e.target.value)}
            />
          </Form.Group> */}
          <input className="form-control" type="file" accept="image/*" onChange={(e) => setBukti(e.target.files[0])}/>
          <Form.Group controlId="formBasicCheckbox"></Form.Group>
          <ToastContainer autoClose={2000} />
          <Button variant="primary" type="submit" block>
            Konfirmasi Pembayaran
          </Button>
          <hr />
        </Form>
      </Row>
    </div>
  );
};

export default Confirm;
