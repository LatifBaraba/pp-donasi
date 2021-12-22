import React, { useState, useEffect } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchLogin , fetchLoginSession} from "../../../Redux/auth/login/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../../Redux/token/action";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //     dispatch(fetchToken())
  // }, []);
  
  // user : 085721128354
  // pass : 12345678
  
  // const token = useSelector((state) => state.tokenReducer.token.token);
  const donasi = props.location.state.data;
  const uripath = props.location.state.uripath;
  let token = localStorage.getItem("token")

  const onSubmit = (data) => {
    let payload = [];
    if (data === "") {
      errors.showMessage();
    } else {
      payload = {
        username: username,
        password: password,
      };
      if (donasi == "kosong") {
        dispatch(fetchLogin(token, payload));        
      } else {
        dispatch(fetchLoginSession(token, payload, donasi, uripath));        
      }
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
                <Form.Group controlId="formBasicNoHp">
                  <Form.Control
                    type="text"
                    placeholder="No. Hp"
                    {...register("username", {
                      required: true,
                    })}
                    onChange={(e) => setUsername(e.target.value)}
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
                <ToastContainer autoClose={2000} />
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
              {/* <Button
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
              </Button> */}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
