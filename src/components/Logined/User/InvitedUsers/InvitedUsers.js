import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UsersList from "../UsersList";

import { USERS_GET_INVITED } from "../../../../paths/Users";

export default function InvitedUsers(){

    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const [arrData, setArrData] = useState([])              // будет хранить данные с сервера


    // Функция запрашивает пользователей которых вы пригласили
    async function getArrData(){
        return await fetch(USERS_GET_INVITED + userId,{
            method: 'get',
        }).then(resp => resp.json()).then(json => {setArrData(json);} ); 
    }

    useEffect(()=>{
        // Если есть userId и данные с сервера еще не получены выполняем запрос на сервер
        if(userId != undefined && arrData.length === 0) getArrData()
    },[userId])


    return(
        <>
            <UsersList users={arrData}/>
        </>
    )
}