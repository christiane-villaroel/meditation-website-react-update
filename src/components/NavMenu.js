import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, } from "reactstrap";

const NavMenu = ()=>{
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar className="navbar-expand-md">
                <NavbarBrand className="d-inline-block align-text-center text-white" href="/">
                     <img src={process.env.PUBLIC_URL + '/assets/images/mindfulLogo.svg'} style={{height:30}} className="me-2 logo" alt="logo"/>
                    Mindful
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar className="text-white">
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink to={'/'} className="text-white nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about' className="text-white nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact' className="text-white nav-link">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavMenu;