import React, { useState } from 'react';
import { Form, Button, Container, Row, Card, Col, Table } from 'react-bootstrap';
import Header from '../Header/Header';
import Axios from 'axios';

const LoanSearch = () => {
    const search = {
        borrowerName: '',
        loanNumber: '',
        loanAmount: ''
    }
    const [state, setState] = useState(search);
    const [showResults, setShowResults] = useState(false);


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        setState(search);
        setShowResults(true);

        Axios.get('==========URL===========', state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

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
                                                <Form.Control name="borrowerName" placeholder="Borrower Full Name" type="text" value={state.borrowerName} onChange={handleChange} />
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
                                {showResults ? <LoanSearchTable /> : null}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    );
}


const LoanSearchTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Borrower Name</th>
                    <th>Loan Number</th>
                    <th>Loan Amount</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    )
}

export default LoanSearch;