import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center pt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary fs-4'>Journalism Without Fear or Favour</p>
                <p className='fs-5 text-secondary'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex py-3 px-3 bg-light fs-5 mb-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={60}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle className='ms-auto' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>{' '}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;