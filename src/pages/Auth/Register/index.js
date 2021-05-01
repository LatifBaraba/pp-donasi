import React from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchRegister } from "../../../Redux/auth/register/actions";

function Index() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => fetchRegister(data);

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
                    placeholder="Nama Lengkap"
                    {...register("nama_lengkap", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    placeholder="No Handphone"
                    type="number"
                    {...register("no_hp", {
                      required: true,
                    })}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Daftar
                </Button>
                <hr />
                <Form.Text>
                  <center>Sudah punya Akun ? <Link to="/login"> Masuk</Link> </center>
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
