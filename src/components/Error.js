import { NavLink } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

const Error = ({msg}) =>{
    
   return( 
      <Container>
         <Row>
            <Col className="text-center">
               <h1 className="display-3">Error 404</h1>
               <h2 className="display-5">{msg|| "Page Not Found"}</h2>
            </Col>
         </Row>
         <Row>
            <Col className="text-center" >
               <NavLink to="/" className="text-white nav-link link-primary">Click to Return to Homepage</NavLink>
               <img className="my-4" id="sitting-meditation"
               style={{height:100}}
               src={process.env.PUBLIC_URL + '/assets/images/sitting-meditation.svg'}/>
            </Col>
         </Row>
      </Container>
   )
}

export default Error;