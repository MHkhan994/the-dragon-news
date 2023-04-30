import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const user = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle className='ms-auto' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>

                        </Nav>
                        <Nav>
                            {user && <h1>{user.displayName}</h1>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ? <Button variant="secondary">Logout</Button> : <Link to='/login'><Button variant="secondary">Login</Button></Link>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;