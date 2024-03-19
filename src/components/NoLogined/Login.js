import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login(){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control type="username" placeholder="User name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary">
                Войти
            </Button>
        </Form>
    )
}