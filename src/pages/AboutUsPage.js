import React from "react";
import NavMenu from "../components/NavMenu";
import useFetch from "../useFetch"
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Container,Row,Col} from "reactstrap"

const AboutUsPage = () =>{
    const {data,error,isLoading} = useFetch(`http://localhost:8000/aboutUs`)

    
    return (
        <main>
            <NavMenu/>
            {error && <Error/>}
            {isLoading && <Loading/>}
            {data && 
                <Container>
                    <Row className="text-center">
                        <Col xs="12">
                            <h3 className="display-4">{data[0].title}</h3>
                        </Col>
                        <Col>
                            <p className="lead">{data[0].description}</p>
                        </Col>
                    </Row>
                </Container>
            }
        </main>
    );
}

export default AboutUsPage;