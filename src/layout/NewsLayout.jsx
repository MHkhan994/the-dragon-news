import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from './RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav>Hello</RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default NewsLayout;