import React from "react";
import { Button, Navbar, Nav,  } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavBar(){
    return(
    
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' fixed='bottom'>
            <Navbar.Brand>TaskManager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                
                <Nav>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/logout'>Выход</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        
    )
}