import React, { useState } from "react";
import { Container, Row, Col, Button,ButtonGroup, Modal, ModalBody, ModalHeader, ModalFooter,Form,FormGroup,Input, InputGroup, InputGroupText } from "reactstrap";

const Footer = () =>{
    /* useState to update modal function from true to false */
    const [isOpen, setIsOpen] = useState(false);
    const [rSelected, setRSelected] = useState(null);

    function toggleModal() {
      setIsOpen(!isOpen);
    };

    return (
        <footer className="footer">
            <Container className="container-fluid">
                <Row className="row pt-md-2 align-bottom text-center" >
                    <Col className="col-12 align-self-center mt-3" >
                        {/* Reactstrap Button Trigger Modal Body */}
                        <Button type="button" color="primary" onClick={toggleModal}>Donate</Button>
                        {/* Reactstrap Modal Body */}
                        <Modal isOpen={isOpen}onRequestClose={toggleModal}>
                            <ModalHeader className="d-flex flex-column">
                                {/* ADD LOGO <img src={mindfulLogo} className="logo" alt="logo"/> */}
                                <h5>Free Minds</h5>
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup className="d-flex justify-content-center">
                                        <ButtonGroup className="btn-group btn-group-toggle m-2" role="group">
                                            <Button
                                            color="primary"
                                            outline
                                            onClick={() => setRSelected(1)}
                                            active={rSelected === 1}
                                            >
                                                Donate Monthly
                                            </Button>
                                            <Button 
                                             color="primary"
                                             outline
                                             onClick={() => setRSelected(2)}
                                             active={rSelected === 2}
                                            >
                                                On Time Donation
                                            </Button>
                                        </ButtonGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Container>
                                            <Row className="justify-content-center mb-1">
                                                <Button color="info" outline className="col-3 m-1">$200</Button>
                                                <Button color="info" outline className="col-3 m-1">$100</Button>
                                                <Button color="info" outline className="col-3 m-1">$50</Button>
                                            </Row>
                                            <Row className="justify-content-center mb-1">
                                                <Button color="info" outline className="col-3 m-1">$30</Button>
                                                <Button color="info" outline className="col-3 m-1">$10</Button>
                                                <Button color="info" outline className="col-3 m-1">$5</Button>
                                            </Row>
                                            <Row mt="2" className="justify-content-center">
                                                <Col className="col-10">
                                                    <InputGroup>
                                                        <InputGroupText className="input-group-text bg-white">$</InputGroupText>
                                                        <Input type="number" className="form-control"></Input>
                                                        <InputGroupText className="input-group-text bg-white ">USD</InputGroupText>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </FormGroup>
        
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggleModal}>Close</Button>
                                <Button color="primary">Donate</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col className="mt-3">
                        &copy; Copyright 2022 Christiane Villaroel <em>All Rights Reserved</em>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
