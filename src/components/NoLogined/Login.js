import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginValidator from "./Validators/LoginValidator";   // Валидатор формы

import { useSelector, useDispatch } from 'react-redux';
import { updateErrorText } from '../../slices/userSlice';



export default function Login(){

    // Для работы с состоянием
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();
    
    // Ссылки на поля формы
    const refUsername = React.createRef();
    const refPassword = React.createRef();


    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control type="username" placeholder="User name" ref={refUsername}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={refPassword}/>
            </Form.Group>

            <Button variant="primary" onClick={()=>LoginValidator(refUsername, refPassword, (text)=>dispatch(updateErrorText(text)))}>
                Войти
            </Button>
        </Form>
    )
}