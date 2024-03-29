import React from "react";
import './InviteTokens.css'
import { USERS_INVITE_TOKENS } from "../../../../paths/Users";

// Компанента
import TokenInput from "./TokenInput";
import TokenList from "./TokenList";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function InviteUser(){
    
    const [arrData, setArrData] = useState([]);                         // Для хранения ответа сервера
    const [flagGenerateNew, setFlagGenerateNew] = useState(false);      // Флаг надо ли генерировать новый токен
    const [token, setToken] = useState(undefined)                       // Если токен придет он сохранится сюда
    const user = useSelector((state) => state.user)
    
    // Запрос данных с сервера. Создание нового токена приглашения
    async function getArrData(){
        await fetch(USERS_INVITE_TOKENS,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
               userId: user.userId,
               generateNew: flagGenerateNew
            })
        }).then(resp => resp.json()).then(json => {setArrData(json);if(json.token!=null) setToken(json.token)} ); 
        
    }

    useEffect(()=>{
        // Устанавливаем флаг запроса нового токена в false
        setFlagGenerateNew(false)
        // Если в состоянии есть id пользователя то делаем запрос данных
        if(user.userId != undefined) getArrData();
    },[user, flagGenerateNew])


    return(
        <div className="container invite-user">
            <div className="row">

            {/* Генерация токена */}
            <TokenInput
                token={token}
                generateToken={(flag)=>{setFlagGenerateNew(flag)}}
           />

            {/* Список токенов */}
            <TokenList
                tokens={arrData.tokens  /* Список токенов */}
            />

            </div>
        </div>
    )
}