import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from ? location.state.from.pathname : '/catagory/0'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div className='w-75 mx-auto mt-4'>
            <div className='bg-white w-lg-50 p-lg-5 p-3 fs-4'>
                <Form onSubmit={handleLogin}>
                    <h3 className='text-center fs-2'>Please Login to your Account</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='mb-4 fs-4 px-4' variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text>
                        <span>Don't have an Account? </span>
                        <Link className='text-decoration-none text-danger text-center' to='/register'>Register</Link>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Login;