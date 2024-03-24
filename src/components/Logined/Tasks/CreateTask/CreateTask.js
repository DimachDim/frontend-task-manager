import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateErrorText } from "../../../../slices/userSlice";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // импорт стилей Quill

import validatorCreateTask from "./ValidatorCreateTask";



export default function CreateTask(){

    // Для работы с редактором текста
    const [text, setText] = useState(""); 
    const handleChange = value => setText(value)    // При вводе текста меняем состояние

    // Ссылки на поля
    const refTitle = React.createRef();
    const refText = React.createRef();

    // Передает текст ошибки
    const sid = useSelector((state) => state.user.sid);
    const dispatch = useDispatch();

    return(
        <Form className="mx-lg-5">
            <Form.Group className="mb-3">
                <Form.Label>Заголовок Задачи</Form.Label>
                <Form.Control type="username" placeholder="Title" ref={refTitle}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Описание задачи</Form.Label>
                
                {/* Редактор теста */}
                <ReactQuill 
                    value={text} 
                    className="mb-5"
                    style={{height: '300px'}}
                    ref={refText}

                    onChange={handleChange} 
                /> 
            </Form.Group>

            <Button 
                variant="primary" 
                onClick={
                    ()=>validatorCreateTask(
                        // Передаем поля
                        refTitle, 
                        refText, 
                        sid,        // Сессия
                        // Функция передачи текста ошибки
                        (text)=> dispatch(updateErrorText(text)),
                        // Функция изменения поля текста
                        (text)=> handleChange(text)
                    )
                }
            >
                Создать задачу
            </Button>
        </Form>
    )
}