import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Dropdown, MenuItem } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { fetchDetailDonasiRutin, fetchDetailDonasiRutinPaket } from "./DonasiRutin/Controller/detaildonasi/action";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { fetchOrderRutin } from "../Redux/order-rutin/actions";
import { fetchToken, fetchRefreshToken } from "../Redux/token/action";
import { fetchHistory } from '../Redux/history/action'

const Order = (props) => {
  const username = localStorage.getItem("username");
  const userprofile = localStorage.getItem('userprofile')
  const { register, handleSubmit, errors } = useForm();
  const refresh = () => {
    setInterval(() => {
      window.location.reload();
    }, 100);
  };
  
 
  
  const donasi = props.location.state.data;
  
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchDetailDonasiRutin(token, donasi.id));
    dispatch(fetchDetailDonasiRutinPaket(token, donasi.id));
    dispatch(fetchHistory(token, username))
  }, []);

  const data = useSelector((state) => state.donasiDetailReducer.donasiDetail);
  const datadetailpaket = useSelector((state) => state.donasiDetailReducer.donasiDetailPaket);
  const datauser = useSelector((state) => state.historyReducer.history);

  const [nominal, setNominal] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [tipebayar, setTipeBayar] = useState("");
  const [isrutin, setIsRutin] = useState(true);
  const [jumlahnominal, setJumlahNominal] = useState(0);
  const [anonim, setAnonim] = useState(false);

  const onSubmit = (datas) => {
    let datax = [];
    if (datas === "") {
      errors.showMessage();
    } else {
      let username = localStorage.getItem("username");
      datax = {
        is_rutin: true,
        id_pp_cp_program_donasi: "",
        id_pp_cp_program_donasi_rutin: data.id,
        amount: datadetailpaket.nominal,
        ucapan_dan_doa: ucapan,
        is_anonymous: anonim,
        payment_method: tipebayar,
      };
      dispatch(fetchOrderRutin(token, datax));
    }
  };

  const handleChange = (e)=>{
    // setJumlahNominal(e.target.value);
    const arr1 = e.target.innerHTML.split(" ")[1].split(".")[0]
    const arr2 = e.target.innerHTML.split(" ")[1].split(".")[1]
    const arr3 = e.target.innerHTML.split(" ")[1].split(".")[2] ? e.target.innerHTML.split(" ")[1].split(".")[2] : ""
    const arr4 = arr1.concat(arr2).concat(arr3)    
    setNominal(parseInt(arr4))
  }

  return (
    <div className="container order">
       {/* {datauser.slice(0,1).map((datax, id) =>  */}
      <div>
        <Row className="mt-5 justify-content-center">
          <Col md={8}>
            <h2>Halo Kak, {userprofile} </h2>            
          </Col>
        </Row>
        <hr/>
        </div>        
      {/* // )} */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* <Row className="mt-3 justify-content-center">
          <Col md={8}>
            <h2>Halo</h2>
          </Col>
        </Row> */}
        <Row className="mt-5 justify-content-center">
          <Col md={8}>
            <h4>Silahkan Melakukan Pembayaran Donasi </h4>
            <h3>{datadetailpaket.paket_name}</h3>
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
              <h4>{datadetailpaket.nominal}</h4>
              {/* <Form.Control
                type="text"
                defaultValue={`${datadetailpaket.nominal}`}
                // placeholder="No. Hp"
                {...register("nominal", {
                  required: true,
                })}
                onChange={(e) => setNominal(e.target.value)}
                readOnly
              /> */}
            </Form.Group>
            {/* <Form.Group controlId="formJumlahNominal">
              <Button variant="outline-dark" onClick={handleChange}>Rp. 25.000</Button>{" "}
              <Button variant="outline-dark" onClick={handleChange}>Rp. 50.000</Button>{" "}
              <Button variant="outline-dark" onClick={handleChange}>Rp. 100.000</Button>{" "}
              <Button variant="outline-dark" onClick={handleChange}>Rp. 250.000</Button>{" "}
              <Button variant="outline-dark" onClick={handleChange}>Rp. 500.000</Button>{" "}
              <Button variant="outline-dark" onClick={handleChange}>Rp. 1.000.000</Button>
            </Form.Group> */}
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
        ) : (
          <Row></Row>
        )}
        {tipebayar === "Qris" ? (
          <Row className=" mt-5 justify-content-center">
            <Col md={8}>
              <img src={data.qris_image_url} alt="" style={{ width: "50%" }} />
            </Col>
          </Row>
        ) : (
          <Row></Row>
        )}

        <Row className="mt-5 justify-content-center donasi-amount">
          <Col md={8} className="donasi-amount-content">
            <Form.Group controlId="formUcapan">
              <Form.Label>
                Tuliskan Ucapan dan Doa Untuk Penerima Manfaat
              </Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Enter Text"
                {...register("ucapan", {
                  required: true,
                })}
                onChange={(e) => setUcapan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Tampilkan Anonim" onChange={(e) => setAnonim(true)}/> */}
              <input
                type="checkbox"
                checked={anonim}
                onChange={e => setAnonim(e.target.checked)}
              /> Tampilkan Anonim
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
            {/* <Button variant="primary" type="submit" block>
              Checkout
            </Button> */}
            <Link
              to={{
                pathname: "/invoice/"+ window.location.pathname.split('/')[2] + "/" + window.location.pathname.split('/')[3],
                state: { donasi: [data, datadetailpaket.nominal, tipebayar, isrutin] },
              }}
              className="mr-2"
            >
              <Button onClick={refresh}>Donasi Sekarang</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Order;
