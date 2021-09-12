import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import NotFound from "../../../assets/images/page_not_found.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchReset } from "../../../Redux/auth/reset/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../../Redux/token/action";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function Reset(props) {
  const token = localStorage.getItem("token");
  const { register, handleSubmit, errors, watch } = useForm();
  const passwords = useRef({});
  passwords.current = watch("password", "");

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [tokenpassword, setTokenPassword] = useState( new URLSearchParams(useLocation().search).get("token") );

  // console.log(useQuery().get("token"));
  // useEffect(() => {
  //   dispatch(fetchToken());
  // }, []);

  const onSubmit = (data) => {
    // const useQuery = () => {
    //   return new URLSearchParams(useLocation().search);
    // };
    let payload = [];
    let tokenreset = tokenpassword;
    if (data === "") {
      errors.showMessage();
    } else {
      payload = {
        password: password,
        confirm_password: confirm_password,
        token: tokenreset,
      };
      dispatch(fetchReset(token, payload));
    }
  };

  return (
    <div>
      {tokenpassword !== "" ? (
        <Container>
          <Row className="justify-content-md-center">
            <Card style={{ width: "28rem" }}>
              <Row className="justify-content-md-center">
                <Card.Img
                  variant="top"
                  src={LogoPP}
                  style={{ width: "10rem" }}
                />
              </Row>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="New Password"
                      {...register("password", {
                        required: true,
                      })}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Control
                      type="password"
                      placeholder="New Confirm Password"
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
                  Kembali ke <Link
                  to={{
                    pathname: "/login",
                    state: { data: "kosong" },
                  }}
                  className="mr-2"
                >
                 Login
                </Link>
                </Form>
              </Card.Body>
              
            </Card>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="justify-content-md-center">
            <Card style={{ width: "28rem", height: "25rem" }}>
              <Row className="justify-content-md-center">
                <Card.Img
                  variant="top"
                  src={NotFound}
                  style={{ width: "20rem", paddingTop: "5rem" }}
                />
              </Row>
              <Card.Body style={{ textAlign: "center" }}>
                <Form.Group>
                  <Link to="/forgot">Kembali</Link>
                </Form.Group>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Reset;
