import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import NavMenu from "../components/NavMenu";
import { json } from "react-router-dom";
import FeaturesList from "../features/FeaturesList/FeaturesList";
import useFetch from "../useFetch";
import Loading from "../components/Loading";

const Homepage = () => {
    const {data:features,error,isLoading} = useFetch(`http://localhost:8000/homePage`);
    
    return(
        <main>
            <NavMenu/>
            {isLoading && <Loading/>}
            {features && <FeaturesList features={features}/>}
        </main>
    );
};

export default Homepage