import { Row, Col, Form } from "react-bootstrap"
import NumberFormat from 'react-number-format'

const order = () => {
    return (
        <div className="container order">
            <Row className="mt-3 justify-content-center">
                <Col md={8}><h2>Halo Kak Alwy</h2></Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col md={8}>
                    <h4>Silahkan Melakukan Pembayaran Donasi Bulan ini</h4>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center donasi-amount">
                <Col md={8} className="donasi-amount-content">
                    <span className="mr-2 text-bold">Nominal Donasi</span>
                    <NumberFormat thousandSeparator={'.'} decimalSeparator={','} prefix="Rp."/>
                </Col>
            </Row>
            <Row className=" mt-5 justify-content-center">
                <Col md={8}>Pilih Metode Pembayaran</Col>
            </Row>
            <Row className=" mt-2 justify-content-center">
                <Col md={8}>
                    <Form.Check inline label="BNI" name="group1" type="radio" id={`inline-type-1`} />
                    <Form.Check inline label="BCA" name="group1" type="radio" id={`inline-type-2`} />
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center donasi-amount">
                <Col md={8} className="donasi-amount-content">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tuliskan Ucapan dan Doa Untuk Penerima Manfaat</Form.Label>
                        <Form.Control type="text" placeholder="Enter Text" />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    )
}

export default order
