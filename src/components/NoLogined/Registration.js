import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RegValidator from "./Validators/RegValidator";

import { useSelector, useDispatch } from 'react-redux';
import { updateErrorText, updateSid } from '../../slices/userSlice';

export default function Registration(){

    // Для работы с состоянием
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();

    // Ссылки на поля
    const refToken = React.createRef();
    const refUserName = React.createRef();
    const refPassword = React.createRef();
    const refRepeatPasword = React.createRef();

    console.log(error)
    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Токен регистрации</Form.Label>
                <Form.Control type="token-reg" placeholder="Token" ref={refToken}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Придумайте Имя</Form.Label>
                <Form.Control type="username" placeholder="User name" ref={refUserName}/>
            </Form.Group>
  
            <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={refPassword}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={refRepeatPasword}/>
            </Form.Group>
        
            <Button 
                variant="primary" 
                onClick={
                    ()=>RegValidator(
                        // Ссылки на поля
                        refToken, 
                        refUserName, 
                        refPassword, 
                        refRepeatPasword, 

                        (text)=>dispatch(updateErrorText(text)),    // Обнавляет текст ошибки
                        (sid)=>dispatch(updateSid(sid))             // Обнавляет сессию
                    )
                }
            >
                Регистрация
            </Button>
        </Form>
    )
}