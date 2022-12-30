import { Col,Row } from "reactstrap";
const HeaderContent = ({headerContent})=>{
   const title =  headerContent[0].title
    return(
        <Row className="justify-content-lg-between justify-content-center">
            <Col className="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                <h1 className="display-4">{title}</h1>
                <p className="lead d-none d-sm-block">{}</p>
            </Col>
            <Col className="col-3 ml-md-4">
                <a href="#index.html" >
                    <img src="http://localhost:3000/assets/images/mindfulLogo.svg" className="img-fluid logo" alt="logo" style={{ width:"250px"}}/>
                </a>
            </Col>
        </Row>
    );
}
export default HeaderContent;