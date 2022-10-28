import React, { useState } from "react";
import { Input,Form,FormGroup, Label, Container, Row, Col, Button } from "reactstrap";
import NavMenu from "../components/NavMenu";

const ContactForm = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] =  useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const userMessage = {firstName,lastName,email,subject,message}

        console.log(userMessage, "hi there")
    }

    return (
        <div className="formpage-container">
            <NavMenu/>
            <h1>Contact Us</h1>
            <Form className="container" onSubmit={handleSubmit}>
                <Row className="justify-content-center">
                    <FormGroup className="col-3">
                        <Label>First Name</Label>
                        <Input 
                        type="text"
                        value={firstName}
                        onChange = {(e)=> setFirstName(e.target.value)}
                        required
                        />
                    </FormGroup>
                    <FormGroup className="col-3">
                        <Label>Last Name</Label>
                        <Input 
                        type="text"
                        onChange={(e)=>setLastName(e.target.value)}
                        required
                        />
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <FormGroup className="col-6">
                        <Label> Email Address</Label>
                        <Input 
                        type="email"
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        />
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <FormGroup className="col-6">
                        <Label> Subject</Label>
                        <Input 
                        type="text"
                        onChange={(e)=>setSubject(e.target.value)}
                        required
                        />
                    </FormGroup>
                </Row>
                <Row className="justify-content-center">
                    <FormGroup className="col-6">
                        <Label>Message</Label>
                        <Input 
                        type="textarea"
                        onChange={(e)=>setMessage(e.target.value)}
                        required
                        />
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