import React from 'react';
import { Container, Row, Navbar, Nav, Col } from 'react-bootstrap';

const Header = () => (
    <Container fluid>
        <Row>
            <Col>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Loan Management App</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Login Page</Nav.Link>
                        <Nav.Link href="/search">Search Loan Page</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    </Container >
);

export default Header;
