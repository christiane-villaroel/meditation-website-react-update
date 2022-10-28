import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import mindfulLogo from "../app/assets/img/mindfulLogo.svg";
const NavMenu = ()=>{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return(
        <div>
            <Navbar className="navbar-expand-md">
                <NavbarBrand className="d-inline-block align-text-center text-white" href="/">
                    <img src={mindfulLogo} style={{height:30}} className="me-2 logo" alt="logo"/>
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
                        <UncontrolledDropdown>
                            <DropdownToggle color="info" className="text-white" caret>
                                Our Features
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem>Guided Meditation</DropdownItem>
                                <DropdownItem>Meditation Music</DropdownItem>
                                <DropdownItem>Mediation Timer</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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