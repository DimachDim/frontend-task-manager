import React from "react";
import { useState, useEffect } from "react";
import SerchByName from "./SerchByName";


export default function FollowingUsers(){

    let [strinSerch, setStringSerch] = useState('')         // Содержимое строки поиска
    const [arrData, setArrData] = useState([])              // будет хранить данные с сервера

    // Для запроса данных с сервера
    async function getArrData(){
        await fetch('http://taskmanager/users/serch-name/' + strinSerch,{
            method: 'get',
        }).then(resp => resp.json()).then(json => {setArrData(json);} ); 
    }

    useEffect(()=>{
        // Если в строке поиска есть значение запрашиваем данные
        if(strinSerch != '') getArrData()
    },[strinSerch])

    //console.log('Строка поиска', strinSerch, 'Данныес сервера', arrData)
    return(
        <div className="container mt-5">
            <div className="row">
                <SerchByName
                    serch={(text)=>setStringSerch(text)}
                    users={arrData  /* Пользоватили с сервера*/}
                />
            </div>
        </div>
    )
}