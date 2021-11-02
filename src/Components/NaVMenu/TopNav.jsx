import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";
import NavLogo from '../../Asset/images/My logo/logo-fade.svg'

function TopNav(props) {
    return (
        <>
            <Navbar collapseOnSelect  expand="lg" className="navBg"  >
                <Container>
                    <Navbar.Brand href="#home" className="text-white"><img className="myLogo" src={NavLogo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#"className="text-white" >Home</Nav.Link>
                            <Nav.Link href="#about" className="text-white">About</Nav.Link>
                            <Nav.Link href="#service" className="text-white">Service</Nav.Link>
                            <Nav.Link href="#portFolio" className="text-white">Portfolio</Nav.Link>
                            <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
                            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
                            {/*<NavDropdown title="Dropdown" className="text-white" id="collasible-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default TopNav;