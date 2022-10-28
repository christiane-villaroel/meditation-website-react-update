import React from "react";
import { Input,Form,FormGroup, Label, Container, Row, Col, Button } from "reactstrap";
import NavMenu from "../components/NavMenu";

const ContactForm = () => {
    return (
        <div className="formpage-container">
            <NavMenu/>
            <Form className="container ">
                <Row className="justify-content-center">
                    <FormGroup className="col-3">
                        <Label>First Name</Label>
                        <Input type="text"/>
                    </FormGroup>
                    <FormGroup className="col-3">
                        <Label>Last Name</Label>
                        <Input type="text"/>
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <FormGroup className="col-6">
                        <Label> Email Address</Label>
                        <Input type="email"/>
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <FormGroup className="col-6">
                        <Label> Subject</Label>
                        <Input type="text"/>
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <FormGroup className="col-6">
                        <Label>Message</Label>
                        <Input type="textarea"/>
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <Col className="d-flex justify-content-center">
                        <Button>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

export default ContactForm;