import React, { useState } from 'react'
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap"
import { CopyOutline } from 'react-ionicons'

const Checkout = () => {
    const [vaNumber, setVaNumber] = useState('PPDONASI182738127831')

    const copyToClipboard = (e) => {
        console.log(e)
        document.execCommand(vaNumber);
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
    };

    return (
        <div className="checkout container">
            <Row className="mt-3">
                <Col>
                    <h2>Terimakasih Kak Alwy :)</h2>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center checkout-content">
                <Col md={8}>
                    <span>Silahkan Melakukan Pembayaran Donasi Sebesar</span>
                    <div className="checkout-amount">
                        <h3>Rp. 90.000</h3>
                    </div>
                    <span className="text-muted">Berlaku s/d  (hari), (tanggal) pukul (jam)</span>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center checkout-content">
                <Col md={8}>
                    <span>No. Virtual Account</span>
                    <div className="checkout-amount">
                        <h3>PPDONASI91239128391</h3>
                    </div>
                    <span className="checkout-copy-link" onClick={(e) => copyToClipboard(e)}>
                        <CopyOutline className="icon" color={'#00000'} title={'asdsada'} height="15px" width="15px"/>
                        Copy Virtual Account Number
                    </span>
                </Col>
            </Row>
            {/* <Row className="mt-5">
                <Col><h5 className="text-center">Program Donasi Lainnya</h5></Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" size="sm">Donasi Sekarang</Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" size="sm">Donasi Sekarang</Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/99/f7/6b/99f76b3de162688defe73255366828e2.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" size="sm">Donasi Sekarang</Button>
                            </Card.Footer>
                        </Card>
                        
                    </CardDeck>
                </Col>
            </Row> */}
        </div>
    )
}

export default Checkout
