import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import MeditationImg from "../../app/assets/img/features/meditation.jpg"
import MeditationMusicImg from "../../app/assets/img/features/music-headphones.jpg"
import MeditationTimerImg from "../../app/assets/img/features/timer.jpg"
const FeaturesList  = ({features}) => {
    
   console.log(features)
   console.log("features",features.map((feature)=>{
    return <Row>{feature.title}</Row>
   }))
    return(
       <Container>
            {features.map((feature)=>{
                const {title,id,description} = feature
                return (
                    <Col lg="4"  className="card-size mb-3" key={id} >
                        <Card className="text-center text-white bg-dark">
                           <CardImg src={MeditationImg} className="bg-dark card-img" /> 
                           <CardImgOverlay className="pt-5">
                            <CardTitle>{title}</CardTitle>
                            <CardText>{description}</CardText>
                           </CardImgOverlay>
                        </Card>
                    </Col>
                )
            })}
       </Container>
    );
}

export default FeaturesList;