import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => navigate('/catagory/0'))
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle className='ms-auto' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="mx-auto d-flex gap-3">
                            <Link className='text-decoration-none fs-4 text-black' to='/'>Home</Link>
                            <Link className='text-decoration-none fs-4 text-black' to='/'>About</Link>
                            <Link className='text-decoration-none fs-4 text-black' to='/'>Career</Link>
                        </div>
                        <div>
                            {user && <h1 className='pe-lg-3'>{user.displayName}</h1>}
                            <div>
                                {user ? <>
                                    <p className='d-inline pe-3 fs-5'>{user.email}</p>
                                    <Button onClick={handleLogout} className='fs-5 bg-warning border-0 shadow' variant="secondary">Logout</Button>
                                </> :
                                    <Link to='/login'><Button className='fs-5 bg-warning border-0 shadow' variant="secondary">Login</Button></Link>}
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;