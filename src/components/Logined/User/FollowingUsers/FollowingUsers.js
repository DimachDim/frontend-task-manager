import React from "react";
import './FollowingUsers.css'
import { useState, useEffect } from "react";
import { useSelector, UseSelector } from "react-redux";

import SerchByName from "./SerchByName";
import UsersList from "../UsersList";

import { USERS_SERCH_NAME, USERS_GET_MY_SUBS, USERS_GET_MY_FOLLOWERS } from "../../../../paths/Users";

export default function FollowingUsers(){

    // Для строки поиска
    const [strinSerch, setStringSerch] = useState('')       // Содержимое строки поиска
    const [arrData, setArrData] = useState([])              // будет хранить данные с сервера

    // Для списка подписок
    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const [arrMySubs,setArrMySubs ] = useState([])          // Хранит список на кого подписан
    
    // Для списка подписчиков
    const [arrMyFollowers, setArrMyFollowers] = useState([])// Хранит список подписчиков

    // Для запроса данных по строке поиска
    async function getArrData(){
        await fetch(USERS_SERCH_NAME + strinSerch,{
            method: 'get',
        }).then(resp => resp.json()).then(json => {setArrData(json);} ); 
    }

    // Для запроса на кого подписан пользователь
    async function getArrMySubs(){
        await fetch(USERS_GET_MY_SUBS + userId,{
            method:'get'
        }).then(resp => resp.json()).then(json => {setArrMySubs(json);}); 
    }

    // Для запроса подписчиков
    async function getArrMyFollowers(){
        await fetch(USERS_GET_MY_FOLLOWERS + userId,{
            method:'get'
        }).then(resp => resp.json()).then(json => {setArrMyFollowers(json);}); 
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

        /* ДЛЯ СПИСКА ПОДПИСЧИКОВ */
        // Если нет данных о подписчиках. Делаем запрос
        if(arrMyFollowers.length === 0) getArrMyFollowers()
    },[strinSerch, userId])


    return(
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="serch-inp">
                    <SerchByName
                        serch={(text)=>setStringSerch(text)}
                        users={arrData  /* Пользоватили с сервера*/}
                    />
                </div>

                <div className="followers">
                    <p>Мои подписки</p>
                    <UsersList
                        users={arrMySubs}
                        />
                </div>

                <div className="followers">
                    <p>Мои подписчики</p>
                    <UsersList
                        users={arrMyFollowers}
                    />
                </div>
            </div>
        </div>
    )
}