import React from 'react'
import Banner from '../components/dashboard/banner'
import Content from '../components/dashboard/content'
import { Row } from 'react-bootstrap'

const dashboard = () => {
    return (
        <div className="container dashboard">
            <Row>
                <Banner/>
            </Row>
            <Row>
                <Content/>
            </Row>
        </div>
    )
}

export default dashboard
