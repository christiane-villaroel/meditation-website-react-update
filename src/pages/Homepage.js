import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import NavMenu from "../components/NavMenu";
import MeditationImg from "../app/assets/img/features/meditation.jpg"
import MeditationMusicImg from "../app/assets/img/features/music-headphones.jpg"
import MeditationTimerImg from "../app/assets/img/features/timer.jpg"

const Homepage = () => {
    return(
        <main>
            <NavMenu/>
            <Container id="top-homepage">
                <Row>
                    <Col className="text-center" mt="3" mb="3">
                        <h3 className="display-4">Who We Are?</h3>
                        <p className="lead">
                        Free Minds is a non-profit organization whose primary mission is to provide free resources for every day working people.
                        We believe that practicing meditation everyday can help reduce stress and anxiety and in turn improve overall health.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container id="bottom-homepage"className="pb-5">
                <Row>
                    <Col>
                        <h3 className="text-center display-6">Our Features</h3>
                    </Col>
                </Row>
                <Row  className="d-flex flex-column align-items-center
                flex-lg-row">
                    <Col lg="4"  className="card-size mb-3" >
                        <Card className="text-center text-white bg-dark">
                           <CardImg src={MeditationImg} className="bg-dark card-img" /> 
                           <CardImgOverlay className="pt-5">
                            <CardTitle>Guided Meditations</CardTitle>
                            <CardText>10 minute Guided Audio & Video Meditation</CardText>
                           </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col lg="4" className="card-size mb-3">
                        <Card className="text-center text-white bg-dark">
                           <CardImg src={MeditationMusicImg} className="bg-dark card-img" /> 
                           <CardImgOverlay className="pt-5">
                            <CardTitle>Mediation Music</CardTitle>
                            <CardText>Access to Free Music to listen to aid in you're meditation.</CardText>
                           </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col lg="4" className="card-size mb-3">
                        <Card className="text-center text-white bg-dark">
                           <CardImg src={MeditationTimerImg} className="bg-dark card-img" /> 
                           <CardImgOverlay className="pt-5">
                            <CardTitle>Mediation Timer</CardTitle>
                            <CardText>A Self paced Meditation Timer that can be adjusted to fit you're busy schedule.</CardText>
                           </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Homepage