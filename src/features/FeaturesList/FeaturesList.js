import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container} from "reactstrap";
/* import MeditationImg from "../../app/assets/img/features/meditation.jpg"
import MeditationMusicImg from "../../app/assets/img/features/music-headphones.jpg"
import MeditationTimerImg from "../../app/assets/img/features/timer.jpg" */
const FeaturesList  = ({features}) => {
    

   
    return(
       <Container 
        className="d-flex flex-column flex-md-row justify-content-center align-items-center pb-3"
        >
            {features.map((feature)=>{
                
                const {title,id,description,img} = feature

                return (
                    <Col className="card-size" key={id} >
                        <Card 
                            className="text-center text-white bg-dark mt-2 mt-md-0 mx-md-3"
                            >
                           <CardImg src={img} className="bg-dark card-img" /> 
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