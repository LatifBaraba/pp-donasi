import React from 'react'
import { Row, Col, Carousel, Card, Button } from 'react-bootstrap'

const DetailDonasi2 = () => {
    return (
        <div className="container detail-program">
            <Row className="mt-3 p-2">
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.alphacoders.com/943/thumb-1920-943148.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/2637581.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col md={8} className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={4}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            {/* <Button variant="primary" className="button-donasi">Primary</Button> */}
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            {/* <Button variant="primary" className="button-donasi">Primary</Button> */}
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            {/* <Button variant="primary" className="button-donasi">Primary</Button> */}
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4 text-justify justify-content-center">
                <Col md={8}>
                    <h5>Ucapan Dan Doa</h5>
                </Col>
            </Row>
            <Row className="text-justify justify-content-center">
                <Col md={8}>
                    Arief Ramdhani - "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                </Col>
            </Row>
            <Row className="mt-4 text-center justify-content-center">
                <Col md={3}>
                    <Button variant="primary">Donasi Sekarang</Button>
                </Col>
                <Col md={3}>
                    <Button variant="secondary">Donasi Bulan ini</Button>
                </Col>
            </Row>
        </div>
    )
}

export default DetailDonasi2
