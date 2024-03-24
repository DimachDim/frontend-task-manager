import React from "react";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { getMyTasks } from "./myTasksRequest";

export default function MyTasks(){

    // Для работы с состоянием
    const user = useSelector((state) => state.user);
    const [arrTasks, setArrTasks] = useState([]);

    //Первый рендоринг
    useEffect(()=>{
        
        // Объявляем асинх функц
        async function getData(){
            // Отправляем id на сервер
            const response = await getMyTasks(user.userId)
            // Сохраняем ответ в локальное состояние
            setArrTasks(response) 
        }
        // Вызываем созданную функцию
        getData()
    }, [ user.userId])
    

    
    console.log(arrTasks)
    
    return(
        <>
            MyTasks
        </>
    )
}