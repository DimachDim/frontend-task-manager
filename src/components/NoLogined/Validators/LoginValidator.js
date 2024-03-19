import React from "react"
import { useSelector, useDispatch } from 'react-redux';

export default function LoginValidator(refUser, refPassword, actionErrorText){
    

    // Достаем содержимое полей
    let userName, password;
    userName = refUser.current.value;
    password = refPassword.current.value;
    
    // Проверяем поля на заполненность
    switch(''){
        case userName: 
            actionErrorText('Укажите имя пользователя')
            return

        case password: 
            actionErrorText('Укажите пароль')
            return
    }


    // Если поля заполнены отправляем данные на сервер
    
}