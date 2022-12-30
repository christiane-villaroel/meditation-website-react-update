import { Col,Row } from "reactstrap";
const HeaderContent = ({headerContent})=>{
    
    return(
        <Row className="justify-content-lg-between justify-content-center">
            <Col className="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                <h1 className="display-4">{headerContent[0].header[0].title}</h1>
                <p className="lead d-none d-sm-block">{headerContent[0].header[0].description}</p>
            </Col>
            <Col className="col-3 ml-md-4">
                <a href="#index.html" >
                    <img src={headerContent[0].header[0].img} className="img-fluid logo" alt="logo" style={{ width:"250px"}}/>
                </a>
            </Col>
        </Row>
    );
}
export default HeaderContent;