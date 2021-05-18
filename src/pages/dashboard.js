import React from 'react'
import Banner from '../components/dashboard/banner'
import Content from '../components/dashboard/content'
import Content2 from '../components/dashboard/content2'
import { Row } from 'react-bootstrap'

const dashboard = () => {
    return (
        <div className="container dashboard">
            <Row>
                <Banner/>
            </Row>
            <Row>
                <Content/>
                <Content2/>
            </Row>
        </div>
    )
}

export default dashboard
