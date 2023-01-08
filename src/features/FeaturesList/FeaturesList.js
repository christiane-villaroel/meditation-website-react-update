import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container,Row} from "reactstrap";
const FeaturesList  = ({features}) => {
    const aboutUs =  features[0].aboutUs;
    const featureCards = features[1].featureCards;

    
    return(
        <div style={{width:'100%'}}>
            {aboutUs.map((about)=>{
                const {title,description,id} = about;
                return(
                    <Container id="top-homepage" key={id}>
                        <Row>
                            <Col className="text-center" mt="3" mb="3">
                                <h3 className="display-4">{title}</h3>
                                <p className="lead">{description}</p>
                            </Col>
                        </Row>
                    </Container>
                );
            })}
            <Container 
            className="pb-3"
            >
                 <Row>
                    <Col >
                        <h3 className="text-center display-6 my-3">Our Features</h3>
                    </Col>
                </Row>
                <Row className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                {featureCards.map((feature)=>{
                    const {title,id,description,img} = feature;
                    return (
                        <Col className="card-size" key={id} >
                            <Link to='/'>
                            <Card 
                                className="text-center text-white bg-dark mt-2 mt-md-0 mx-md-3"
                                >
                               <CardImg src={img} className="bg-dark card-img" /> 
                               <CardImgOverlay className="pt-5">
                                <CardTitle>{title}</CardTitle>
                                <CardText>{description}</CardText>
                               </CardImgOverlay>
                            </Card>
                            </Link>
                        </Col>
                    ) 
                })}
                </Row>
            </Container>
        </div>
    );
}

export default FeaturesList;