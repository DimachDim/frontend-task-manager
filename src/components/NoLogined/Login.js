import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login(){

    // Ссылки на поля формы
    const refUsername = React.createRef();
    const refPassword = React.createRef();

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control type="username" placeholder="User name" ref={refUsername}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={refPassword}/>
            </Form.Group>
        
            <Button variant="primary">
                Войти
            </Button>
        </Form>
    )
}