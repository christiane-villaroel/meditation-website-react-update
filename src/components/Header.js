import {  Button } from "reactstrap";
import React from "react";

const Header = () =>{
    return (
       <header className="container-fluid py-f jumbotron">
            <div className="container">
           <div className="row justify-content-lg-between justify-content-center">
                <div className="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                    <h1 className="display-4">Take Time to Be Mindful</h1>
                    <p className="lead d-none d-sm-block">Stress and Anxiety play a big role in our every day lives. <br/> Take time to relieve that stress
                    </p>
                </div>
                <div className="col-3 ml-md-4">
                    <a href="#index.html" >
                    {/*ADD LOGO <img src={mindfulLogo} className="img-fluid logo" alt="logo" style={{ width:"250px"}}/> */}
                    </a>
                </div>
           </div>
          </div>
       </header>
    );
};

export default Header;