import React, {useState} from 'react'
import { Row, Col, Carousel, ProgressBar, Button } from 'react-bootstrap'

const DetailDonasi = () => {
    const [now, setNow] = useState(45);
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
            <Row className="mt-3 mx-2">
                <Col md={4}>
                    <h4>Judul Program</h4>
                </Col>
            </Row>
            <Row className="mt-3 mx-2">
                <Col md={8}>
                    <ProgressBar animated now={now} label={`${now}%`} className="donasi-progressbar"/>
                    <ProgressBar animated now={now} label={`${now}%`} srOnly className="donasi-progressbar"/>
                </Col>
                <Col md={4}>
                    21 Oktober - 30 Oktober
                </Col>
            </Row>
            <Row className="my-4 mx-2 text-justify">
                <Col>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Col>
            </Row>
            <Row className="my-2 mx-2 text-justify">
                <Col>
                    <h5>Ucapan Dan Doa</h5>
                </Col>
            </Row>
            <Row className="my-2 mx-2 text-justify">
                <Col>
                    Arief Ramdhani - "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                </Col>
            </Row>
            <Row className="text-center justify-content-center">
                <Col>
                    <Button variant="primary">Donasi Sekarang</Button>
                </Col>
            </Row>
        </div>
    )
}

export default DetailDonasi
