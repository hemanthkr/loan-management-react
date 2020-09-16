import React, { useState } from 'react';
import { Form, Button, Container, Row, Card, Col, Table } from 'react-bootstrap';
import Header from '../Header/Header';

const LoanSearch = () => {
    const [state, setState] = useState({
        fullName: '',
        loanNumber: '',
        loanAmount: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);

    };

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mt-5">
                        <Card>
                            <Card.Header>
                                <Form inline onSubmit={handleSubmit}>
                                    <Form.Row className="align-items-center">
                                        <Form.Group>
                                            <Col xs="auto">
                                                <Form.Control name="fullName" placeholder="Borrower Full Name" type="text" value={state.fullName} onChange={handleChange} />
                                            </Col>
                                            <Col xs="auto">
                                                <Form.Control name="loanNumber" placeholder="Loan Number" type="number" min="0" value={state.loanNumber} onChange={handleChange} />
                                            </Col>
                                            <Col xs="auto">
                                                <Form.Control name="loanAmount" placeholder="Loan Amount" type="number" min="0" value={state.loanAmount} onChange={handleChange} />
                                            </Col>
                                        </Form.Group>
                                        <Button variant="outline-primary" type="submit">Search</Button>
                                    </Form.Row>
                                </Form>
                            </Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Borrower Name</th>
                                            <th>Loan Number</th>
                                            <th>Loan Amount</th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default LoanSearch;