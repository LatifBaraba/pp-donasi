import React, { useState, useEffect } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchForgot } from "../../../Redux/auth/forgot/actions";
import { fetchToken } from "../../../Redux/token/action";

import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (data) => fetchForgot(data);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");  

  useEffect(() => {
      dispatch(fetchToken())
  }, []);
  
  const token = useSelector((state) => state.tokenReducer.token.token);

  const onSubmit = (data) => {
    let payload = [];
    if (data === "") {
      errors.showMessage();
    } else {
      payload = {
        email: email,
      };
      dispatch(fetchForgot(token, payload));
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
                <ToastContainer autoClose={2000} />
                <Button variant="primary" type="submit" block>
                  Submit
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
