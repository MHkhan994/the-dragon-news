import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, signIn } = useContext(AuthContext)
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.password.value;

        createUser(email, password)
            .then(result => {
                signIn(email, password)
                    .then(() => navigate('/catagory/0'))
            })
            .catch(error => console.log(error))
    }


    const handleCheck = e => {
        setCheck(e.target.checked)
    }
    return (
        <div>
            <Container>
                <div className='bg-white w-lg-50 p-lg-5 p-3 fs-4 mt-4'>
                    <Form onSubmit={handleRegister}>
                        <h3 className='text-center fs-2'>Please Login to your Account</h3>
                        <Form.Group className="mb-3">                           <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" name='name' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Upload Your Photo</Form.Label>
                            <Form.Control type="text" placeholder="Photo Url" name='photo' required />
                        </Form.Group>

                        <Form.Group className="mb-3">                           <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check onClick={handleCheck} type="checkbox" label="accept terms and conditions" />
                        </Form.Group>
                        <Button className='mb-4 fs-4 px-4' variant="primary" type="submit" disabled={!check}>
                            Register
                        </Button>
                        <br />
                        <Form.Text>
                            <span>Already have an Account? </span>
                            <Link className='text-decoration-none text-danger text-center' to='/login'>Login</Link>
                        </Form.Text>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;