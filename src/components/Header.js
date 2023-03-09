import React from "react";
import {Container,Row,Col} from "reactstrap";



const Header = () =>{
    return (
        <header className="container-fluid py-f jumbotron">
            <Container>
            <Row className="justify-content-lg-between justify-content-center">
            <Col className="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                <h1 className="display-4">Take Time to Be Mindful</h1>
                <p className="lead d-none d-sm-block">
                    Stress and Anxiety play a big role in our every day lives. Take time to relieve that stress
                </p>
            </Col>
            <Col className="col-3 ml-md-4">
                <a href="#index.html" >
                    <img src={process.env.PUBLIC_URL + '/assets/images/mindfulLogo.svg'} className="img-fluid logo" alt="logo" style={{ width:"250px"}}/>
                </a>
            </Col>
        </Row>
            </Container>
        </header>
    );
};
export default Header;