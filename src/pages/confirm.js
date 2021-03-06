import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  Row,
  Container,
  Form,
  Col,
  Dropdown,
  FormControl,
  Spinner,
} from "react-bootstrap";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchAddConfirm, fetchConfirmList } from "../Redux/confirm/action";
// import { fetchToken } from "../Redux/token/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "../helper/index";

import NumberFormat from "react-number-format";
import Select from "react-select";

import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const Confirm = () => {
  const [spinner, setSpinner] = useState(false);
  const [color, setColor] = useState("#36D7B7");
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
  const [idtransaction, setIdtransaction] = useState("");

  const [listSelect, setlistSelect] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    dispatch(fetchConfirmList(token));
  }, []);

  const token = useSelector((state) => state.tokenReducer.token.token);
  const confirmlist = useSelector((state) => state.confirmReducer.confirm);

  const onSubmit = (data) => {
    setSpinner(true);
    let token = localStorage.getItem("token");
    if (data !== "") {
      uploadImage(bukti)
        .then((message) => {
          const bukti = message.response.data.url;
          dispatch(fetchAddConfirm(token, idtransaction, bukti));
          setSpinner(false);
        })
        .catch((error) => {
          ToastContainer.error("Upload Image Failed !");
        });
    } else {
      errors.showMessages();
    }
  };

  useEffect(() => {
    const list = [];
    confirmlist.map((e) => {
      list.push({
        value: e.id,
        label:
          "Rp. " +
          e.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") +
          " -- " +
          e.donasi_title,
      });
    });

    setlistSelect(list);
  }, [confirmlist]);

  const handleChange = (e) => {
    setIdtransaction(e.value);
  };

  const override = css`
    display: block;
    padding: 175px;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      {spinner === true ? (
        <div className="checkout container">
          <Row className="justify-content-md-center">
            <BeatLoader
              color={color}
              loading={spinner}
              css={override}
              size={20}
            />
          </Row>
        </div>
      ) : (
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
              {/* <Form.Group controlId="formIdtransaction">
                <Form.Label>Pilih Donasi</Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  onChange={(e) => setIdtransaction(e.target.value)}
                >
                  <option value="">Pilih Donasi</option>
                  {confirmlist.map((confirm, index) => (
                    <option key={index} value={confirm.id}>
                      {"Rp. " + confirm.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")  + " -- " + confirm.donasi_title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group> */}

              <Select
                options={listSelect}
                onChange={handleChange}
                placeholder="Pilih Donasi"
                isSearchable={true}
              />

              <Form.Label>Upload Bukti Bayar</Form.Label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => setBukti(e.target.files[0])}
              />
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <ToastContainer autoClose={2000} />
              <Button variant="primary" type="submit" block>
                Konfirmasi
              </Button>
              <hr />
            </Form>
          </Row>
        </div>
      )}
    </>
  );
};

export default Confirm;
