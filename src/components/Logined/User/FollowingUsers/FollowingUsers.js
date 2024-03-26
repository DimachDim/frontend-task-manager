import React from "react";
import { useState, useEffect } from "react";
import { useSelector, UseSelector } from "react-redux";

import SerchByName from "./SerchByName";
import UsersList from "../UsersList";


export default function FollowingUsers(){

    // Для строки поиска
    const [strinSerch, setStringSerch] = useState('')       // Содержимое строки поиска
    const [arrData, setArrData] = useState([])              // будет хранить данные с сервера

    // Для списка подписок
    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const [arrMySubs,setArrMySubs ] = useState([])          // Хранит список на кого подписан
    

    // Для запроса данных по строке поиска
    async function getArrData(){
        await fetch('http://taskmanager/users/serch-name/' + strinSerch,{
            method: 'get',
        }).then(resp => resp.json()).then(json => {setArrData(json);} ); 
    }

    // Для запроса на кого подписан пользователь
    async function getArrMySubs(){
        await fetch('http://taskmanager/followers/get-my-subscriptions/' + userId,{
            method:'get'
        }).then(resp => resp.json()).then(json => {setArrMySubs(json);}); 
    }

    useEffect(()=>{
        /* ДЛЯ СТРОКИ ПОИСКА */
        // Если в строке поиска есть значение запрашиваем данные
        if(strinSerch != '') getArrData()
        // Если строка пуста то удаляем все данные
        if(strinSerch === '') setArrData([])


        /* ДЛЯ СПИСКА НА КОГО ПОДПИСАН */
        // Если нет данных на кого подписан. Запрашиваем с сервера
        if(arrMySubs.length === 0) getArrMySubs()
    },[strinSerch, userId])

    console.log(arrMySubs)
    return(
        <div className="container mt-5">
            <div className="row">
                <SerchByName
                    serch={(text)=>setStringSerch(text)}
                    users={arrData  /* Пользоватили с сервера*/}
                />
                
                <UsersList
                    users={arrMySubs}
                />
            </div>
        </div>
    )
}