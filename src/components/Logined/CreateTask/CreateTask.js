import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateTask(){
    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Заголовок Задачи</Form.Label>
                <Form.Control type="username" placeholder="Title"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Описание задачи</Form.Label>
                <Form.Control type="text" placeholder="Text"/>
            </Form.Group>

            <Button 
                variant="primary" 
            >
                Войти
            </Button>
        </Form>
    )
}