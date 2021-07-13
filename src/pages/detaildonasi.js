import React, {useState} from 'react'
import { Row, Col, Carousel, ProgressBar, Button } from 'react-bootstrap'

const DetailDonasi = () => {
    const [now, setNow] = useState(45);

    
    return (
        <div className="container detail-program">
            <Row className="mt-3 p-2">
                <Col>
                    <img src="https://wallpapercave.com/wp/wp2670840.jpg" alt="" style={{maxWidth: "100%"}}/>
                </Col>
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
