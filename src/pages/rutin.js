import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Card, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { fetchRutin } from "../Redux/rutin/actions";

function Rutin() {
  const { register, handleSubmit , formState: { errors } } = useForm();
  const onSubmit = (data) => fetchRutin(data);

  return (
    <Container>
      <Row>
        <Col xs={2} md={8}>
          <Card>
            <Card.Body>
              <Col md={8}>
                <p>Daftar Donatur Program Donasi #KitaPeduli</p>
              </Col>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    placeholder="Nama Donatur"
                    {...register("nama_donatur", {
                      required: true                      
                    })}
                  />
                </Form.Group>s                

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    placeholder="Nama Panggilan"
                    {...register("nama_panggilan", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    placeholder="Domisili"
                    {...register("domisili", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    placeholder="No. Whatsapp"
                    {...register("no_wa", {
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

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    placeholder="Program Donasi"
                    {...register("program_donasi", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    placeholder="Waktu Pembayaran Tiap Bulan"
                    {...register("waktu_bayar", {
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
                    placeholder="Konfirmasi Password"
                    type="password"
                    {...register("konfirmasi_password", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    {...register("checkbox", {
                      required: true,
                    })}
                    label="Saya dengan ini menyatakan bersedia untuk mengikuti syarat dan ketentuan yang berlaku pada program donasi ini"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Jadi Donatur
                </Button>              
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
            />
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Rutin;
