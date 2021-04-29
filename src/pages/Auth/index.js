import React from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../assets/images/pemudapeduli.png";
import { useForm } from "react-hook-form";

function Index() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    placeholder="Enter Username"
                    {...register("username", {
                      required: true,
                    })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Enter Password"
                    type="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
                <hr />
                <Form.Text>
                  <center>Belum punya Akun ? Daftar</center>
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
}

export default Index;
