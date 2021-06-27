import React, { useState } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchLogin } from "../../../Redux/auth/login/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = setState("");

  const onSubmit = (data) => {
    let payload = [];
    if (data === "") {
      errors.showMessage();
    } else {
      payload = {
        email: email,
        password: password,
      };
      dispatch(fetchLogin(payload));
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
                      required: true,
                    })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Form.Text>
                  <Link to="/forgot">Lupa Password ?</Link>
                  <hr />
                </Form.Text>
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
                <hr />
                <Form.Text>
                  <center>
                    Belum punya Akun ? <Link to="/register">Daftar</Link>
                  </center>
                </Form.Text>
                <hr />
              </Form>
              <Button
                variant="primary"
                href="https://kitabisa.com"
                target="_blank"
                block
              >
                Donasi via KitaBisa.com
              </Button>
              <Button
                variant="primary"
                href="https://ayobantuin.com"
                target="_blank"
                block
              >
                Donasi via AyoBantuin.com
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
