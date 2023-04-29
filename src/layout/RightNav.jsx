import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../pages/Shared/Qzone/Qzone';
import bgimg from '../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className='d-flex flex-column gap-2'>
                <h3>Login With</h3>
                <Button className='fs-6' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button className='fs-6' variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className='pt-3'>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='fs-6 py-3'><FaFacebook className='text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='fs-6 py-3'><FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='fs-6 py-3'><FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='pt-3 position-relative'>
                <img style={{ zIndex: -11 }} className='position-absolute w-100' src={bgimg} alt="" />
                <div className='text-center text-white px-5 d-flex flex-column align-items-center py-5 my-5 gap-4'>
                    <h1>Create an Amazing Newspaper</h1>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='py-3 rounded-0 fs-4' variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;