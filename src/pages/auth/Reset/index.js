import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchReset } from "../../../Redux/auth/reset/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../../Redux/token/action";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reset() {
  const token = localStorage.getItem("token");
  const { register, handleSubmit, errors, watch} = useForm();
  const passwords = useRef({});
  passwords.current = watch("password", "");

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  useEffect(() => {
      dispatch(fetchToken())
  }, []);
  
  const onSubmit = (data) => {
    let payload = [];
    if (data === "") {
      errors.showMessage();
    } else {
      payload = {
        password: password,
        confirm_password: confirm_password,
      };
      dispatch(fetchReset(token, payload));
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
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                    })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirm_password", {
                      required: true,
                      validate: (value) =>
                        value === passwords.current ||
                        "The passwords do not match",
                    })}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <ToastContainer autoClose={2000} />
                <Button variant="primary" type="submit" block>
                  Submit
                </Button>                                
                <hr />
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Reset;
