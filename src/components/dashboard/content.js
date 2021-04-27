import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'react-bootstrap'

const content = () => {
    return (
        <div className="content">
            <Row className="p-2">
                <Col>
                    <div className="program">
                        <div className="program-picture">
                            <img src="https://i.pinimg.com/originals/8e/51/30/8e51302d51089d0f234dc16314c4e5b6.jpg" alt=""/>
                        </div>
                        <div className="program-content">
                            <div className="program-title">
                                Pemadam Kelaparan : 1.000 Nasi Untuk Dhuafa
                            </div>
                            <div className="program-caption">
                                Kelaparan adalah permasalahan di negeri ini yang sudah menjadi rahasia ...
                            </div>
                            <Button className="mr-auto" variant="primary">Donasi Sekarang</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="program">
                        <div className="program-picture">
                            <img src="https://i.pinimg.com/originals/8e/51/30/8e51302d51089d0f234dc16314c4e5b6.jpg" alt=""/>
                        </div>
                        <div className="program-content">
                            <div className="program-title">
                                Pemadam Kelaparan : 1.000 Nasi Untuk Dhuafa
                            </div>
                            <div className="program-caption">
                                Kelaparan adalah permasalahan di negeri ini yang sudah menjadi rahasia ...
                            </div>
                            <Button className="mr-auto" variant="primary">Donasi Sekarang</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default content
