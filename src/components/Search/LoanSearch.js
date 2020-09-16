// import React from 'react';
// import { useForm } from "react-hook-form";
// import { Form, Button, Container, Row, Card, Col, Table } from 'react-bootstrap';

// const LoanSearch = () => {
//     const { register, handleSubmit } = useForm();

//     const onSubmit = (data) => console.log(data);

//     return (
//         <Container className="mt-5">
//             <Row>
//                 <Card>
//                     <Card.Header>
//                         <Form inline onSubmit={handleSubmit(onSubmit)}>
//                             <Form.Row className="align-items-center">
//                                 <Form.Group>
//                                     <Col xs="auto">
//                                         <Form.Control name="fullName" placeholder="Borrower Full Name" type="text" ref={register} />
//                                     </Col>
//                                     <Col xs="auto">
//                                         <Form.Control name="loanNumber" placeholder="Loan Number" type="number" ref={register} />
//                                     </Col>
//                                     <Col xs="auto">
//                                         <Form.Control name="loanAmount" placeholder="Loan Amount" type="number" ref={register} />
//                                     </Col>
//                                 </Form.Group>
//                                 <Button variant="outline-primary" type="submit">Search</Button>
//                             </Form.Row>
//                         </Form>
//                     </Card.Header>
//                     <Card.Body>
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>Borrower Name</th>
//                                     <th>Loan Number</th>
//                                     <th>Loan Amount</th>
//                                 </tr>
//                             </thead>
//                         </Table>
//                     </Card.Body>
//                 </Card>
//             </Row>
//         </Container>
//     );
// }

// export default LoanSearch;