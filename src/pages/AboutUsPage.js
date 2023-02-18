import { GitHubUrl } from "../baseUrl";
import React, { useState } from "react";
import { useEffect } from "react";
import dateFormat from "dateformat";
import NavMenu from "../components/NavMenu";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Container,Row,Col} from "reactstrap"

const AboutUsPage = () =>{
    const[aboutUs,setAboutUs]=useState([]);
    const[reviews,setReviews]=useState([]);
    const [error,setError] = useState(null);
    const [datafetched,setDataFetched]=useState(null);
    const [isLoading,setIsloading] = useState(true);
/* 
    * * source to making multuple fetch request in react 
    -> LINK:https://medium.com/@jdhawks/make-fetch-s-happen-5022fcc2ddae
    * * Credit : Joshua Hawks
*/
    useEffect(()=>{
        Promise.all([
            fetch( GitHubUrl +'aboutUs'),
            fetch( GitHubUrl +'testimonials')
        ])
            .then(([resAboutUs,resReviews])=>{
                if (!resAboutUs.ok || !resReviews.ok){
                    throw Error('Could not fetch data from that resource');
                }
               return Promise.all([resAboutUs.json(),resReviews.json()])
            })
            .then(([dataAboutUs,dataReviews])=>{
                setIsloading(false);
                setError(false);
                setDataFetched(true);
                setAboutUs(dataAboutUs);
                setReviews(dataReviews);
            })
            .catch(err=>{
                setIsloading(false);
                setError(true);
                setDataFetched(false)
            })
    },[])
    return (
        <main>
            <NavMenu/>
            {error && <Error/>}
            {isLoading && <Loading/>}
            {datafetched && 
                <Container className="d-flex flex-column justify-content-between" >
                    <Row className="text-center my-3">
                        <Col xs="12" className="mb-3">
                            <h3 className="display-4">{aboutUs[0].title}</h3>
                        </Col>
                        <Col>
                            <p className="lead">{aboutUs[0].description}</p>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-column justify-content-center align-items-center">
                        <Col className="d-flex justify-content-center" xs="12">
                            <img src={reviews[0].img} style={{height:90}} className="my-4" id="sitting-meditation"/>
                        </Col>
                        <Col  md="10">
                           <blockquote className="blockquote">
                                <p>"{reviews[0].review}"</p>
                                <footer className="blockquote-footer text-white">
                                    Testimonial from <cite> {reviews[0].author} </cite> 
                                    <br/>
                                    <span> {dateFormat(reviews[0].date,"fullDate")}</span>
                                </footer>
                           </blockquote>
                        </Col>
                    </Row>
                </Container>
            }
        </main>
    );
}

export default AboutUsPage;