import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registration(){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Токен регистрации</Form.Label>
                <Form.Control type="token-reg" placeholder="Token" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Придумайте Имя</Form.Label>
                <Form.Control type="username" placeholder="User name" />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Регистрация
            </Button>
        </Form>
    )
}