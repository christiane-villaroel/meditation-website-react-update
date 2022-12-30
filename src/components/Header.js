
import React from "react";
import {Container} from "reactstrap";
import HeaderContent from "./componentConent/HeaderContent";
import useFetch from "../useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Header = () =>{
    const {data:header,error,isLoading} = useFetch(`http://localhost:8000/headerPage`);
    return (
        <header className="container-fluid py-f jumbotron">
            <Container>
                {error && <Error/>}
                {isLoading && <Loading/>}
                {header && <HeaderContent headerContent={header}/>}
            </Container>
        </header>
    );
};
  {
   /*  <Col className="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                        <h1 className="display-4">Take Time to Be Mindful</h1>
                        <p className="lead d-none d-sm-block">Stress and Anxiety play a big role in our every day lives. <br/> Take time to relieve that stress
                        </p>
                    </Col>
                    <Col className="col-3 ml-md-4">
                        <a href="#index.html" >

                         <img src="http://localhost:3000/assets/images/mindfulLogo.svg" className="img-fluid logo" alt="logo" style={{ width:"250px"}}/>
                        </a>
                    </Col> */
    
    /* <header className="container-fluid py-f jumbotron">
            <div className="container">
           <div className="row justify-content-lg-between justify-content-center">
                <div className="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                    <h1 className="display-4">Take Time to Be Mindful</h1>
                    <p className="lead d-none d-sm-block">Stress and Anxiety play a big role in our every day lives. <br/> Take time to relieve that stress
                    </p>
                </div>
                <div className="col-3 ml-md-4">
                    <a href="#index.html" >

                     <img src="http://localhost:3000/assets/images/mindfulLogo.svg" className="img-fluid logo" alt="logo" style={{ width:"250px"}}/>
                    </a>
                </div>
           </div>
          </div>
       </header> */}
export default Header;