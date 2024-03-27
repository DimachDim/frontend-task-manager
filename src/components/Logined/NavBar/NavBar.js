import React from "react";
import { Button, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar(){

    const userName = useSelector((state)=>state.user.userName)      // Имя пользователя

    return(
    
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' fixed='bottom'>
            <Navbar.Brand>TaskManager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                
                <Nav>
                    {/* Создать задачу */}
                    <Nav.Link as={Link} to='/'>Создать задачу</Nav.Link>
                    
                    {/* Мои задачи */}
                    <NavDropdown title="Мои задачи" id="basic-nav-dropdown" drop="up">
                        <NavDropdown.Item as={Link} to="tasks/my-tasks">Созданые мной</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="tasks/pending-tasks">Назначенные</NavDropdown.Item>
                    </NavDropdown>

                    {/* Пользователи */}
                    <NavDropdown title="Пользователи" id="basic-nav-dropdown" drop="up">
                        <NavDropdown.Item as={Link} to="users/invite">Пригласить пользователя</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="users/invited">Приглашенные пользователи</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="users/following">Подписки</NavDropdown.Item>
                    </NavDropdown>
                    
                    {/* Выход */}
                    <Nav.Link as={Link} to='/logout'>Выход</Nav.Link>

                    <span   style={{marginLeft: "10px", color: "#5cb85c"}}>User name: {userName}</span>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        
    )
}