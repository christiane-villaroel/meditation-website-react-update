import {  Button } from "reactstrap";
import React from "react";
import mindfulLogo from "../app/assets/img/mindfulLogo.svg"

const Header = () =>{
    return (
       <header className="container-fluid py-f jumbotron">
            <div class="container">
           <div class="row justify-content-lg-between justify-content-center">
                <div class="col-12 col-md-6 align-self-center text-white text-center text-sm-left">
                    <h1 class="display-4">Take Time to Be Mindful</h1>
                    <p class="lead d-none d-sm-block">Stress and Anxiety play a big role in our every day lives. <br/> Take time to relieve that stress
                    </p>
                </div>
                <div class="col-3 ml-md-4">
                    <a href="#index.html" >
                    <img src={mindfulLogo} className="img-fluid logo" alt="logo" style={{ width:"250px"}}/>
                    </a>
                </div>
           </div>
          </div>
       </header>
    );
};

export default Header;