import React from "react";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // импорт стилей Quill



export default function CreateTask(){

    // Для работы с редактором текста
    const [text, setText] = useState(""); 
    const handleChange = value => setText(value)    // При вводе текста меняем состояние
    

    return(
        <Form className="mx-lg-5">
            <Form.Group className="mb-3">
                <Form.Label>Заголовок Задачи</Form.Label>
                <Form.Control type="username" placeholder="Title"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Описание задачи</Form.Label>
                
                {/* Редактор теста */}
                <ReactQuill 
                    value={text} 
                    className="mb-5"
                    style={{height: '300px'}}

                    onChange={handleChange} 
                /> 
            </Form.Group>

            <Button variant="primary" >
                Создать задачу
            </Button>
        </Form>
    )
}