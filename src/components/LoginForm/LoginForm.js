import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errorsArray = [];
        if (!email) {
            errorsArray.emailAddress = "Email Address is required"
        }
        else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)) {
            errorsArray.emailAddress = "Invalid email address"
        }
        if (password.length < 8) {
            errorsArray.password = "Passwords must be at least 8 characters long"
        }
        console.log(errorsArray)
        setErrors({
            errors: {
                ...errorsArray
            }      
        });
        console.log(errors)
    }, [email, password])



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    };

    //  email /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card className="mx-5">
                        <Card.Header as="h5">Login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control name="emailId" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {errors && <p>{errors.emailAddress}</p>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {errors && errors.password}
                                </Form.Group>
                                <Button variant="primary" type="submit" >Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;