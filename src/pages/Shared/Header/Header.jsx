import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from '../NavigationBar/NavigationBar';

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
            <NavigationBar></NavigationBar>
        </Container>
    );
};

export default Header;