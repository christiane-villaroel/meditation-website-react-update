import { Col, Container, Row } from "reactstrap";

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
            <Col>
            <Col className="text-center" >
               <img className="my-4" id="sitting-meditation"
               style={{height:100}}
               src={process.env.PUBLIC_URL + '/assets/images/sitting-meditation.svg'}/>
            </Col>
            </Col>
         </Row>
      </Container>
   )
}

export default Error;