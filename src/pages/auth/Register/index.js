import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchRegister } from "../../../Redux/auth/register/actions";
import { fetchToken } from "../../../Redux/token/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const passwords = useRef({});
  passwords.current = watch("password", "");

  const [nama_lengkap, setNamaLengkap] = useState("");
  const [nama_panggilan, setNamaPanggilan] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi_password, setKonfirmasiPassword] = useState("");
  const [no_hp, setNoHp] = useState("");

  useEffect(() => {
    dispatch(fetchToken());
  }, []);

  const token = useSelector((state) => state.tokenReducer.token.token);
  const onSubmit = (data) => {
    let payload = [];
    if (data === "") {
      errors.showMessage();
    } else {
      payload = {
        nama_lengkap: nama_lengkap,
        nama_panggilan: nama_panggilan,
        email: email,
        password: password,
        konfirmasi_password: konfirmasi_password,
        no_hp: no_hp,
      };
      dispatch(fetchRegister(token, payload));
    }
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: "28rem" }}>
            <Row className="justify-content-md-center">
              <Card.Img variant="top" src={LogoPP} style={{ width: "10rem" }} />
            </Row>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicNamaLengkap">
                  <Form.Control
                    placeholder="Nama Lengkap"
                    {...register("nama_lengkap", {
                      required: true,
                    })}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicNamaPanggilan">
                  <Form.Control
                    placeholder="Nama Panggilan"
                    {...register("nama_panggilan", {
                      required: true,
                    })}
                    onChange={(e) => setNamaPanggilan(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Password harus diisi",
                    })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicKonfirmasiPassword">
                  <Form.Control
                    placeholder="Konfirmasi Password"
                    type="password"
                    {...register("konfirmasi_password", {
                      required: true,
                      validate: (value) =>
                        value === passwords.current ||
                        "The passwords do not match",
                    })}
                    onChange={(e) => setKonfirmasiPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicNoHandphone">
                  <Form.Control
                    placeholder="No Handphone"
                    type="number"
                    {...register("no_hp", {
                      required: true,
                    })}
                    onChange={(e) => setNoHp(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox"></Form.Group>
                <ToastContainer autoClose={2000} />
                <Button variant="primary" type="submit" block>
                  Daftar
                </Button>
                <hr />
                <Form.Text>
                  <center>
                    Sudah punya Akun ? <Link to="/login"> Masuk</Link>{" "}
                  </center>
                </Form.Text>
                <hr />
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
