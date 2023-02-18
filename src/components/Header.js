import { GitHubUrl } from "../baseUrl";
import React from "react";
import {Container} from "reactstrap";
import HeaderContent from "./componentConent/HeaderContent";
import useFetch from "../useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Header = () =>{
    const {data:header,error,isLoading} = useFetch( GitHubUrl+`headerPage`);
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
export default Header;