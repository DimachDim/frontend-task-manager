import React from "react";
import ListTask from "../ListTask";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function PendingTasks(){

    // Для работы с состоянием
    const userId = useSelector((state) => state.user.userId);
    const [arrTasks, setArrTasks] = useState([]);
    const [refreshMyTasks, setRefreshMyTasks] = useState(0);

    // Функция запрашивает задачи назначеные пользователю
    async function getData(){
        await fetch('http://taskmanager/tasks/pending-tasks/' + userId,{method:'get'})
        .then(resp => resp.json()).then(json => setArrTasks(json) ); 
    }

    useEffect(()=>{
        // Если нет данных с сервера. Делаем запрос
        if(arrTasks.length === 0) getData()
    }, [userId])


    return(
        <>
            <ListTask 
                arrData={arrTasks   /* Массив данных */} 
                refreshPerent={()=>setRefreshMyTasks(refreshMyTasks+1)     /* Функция обновления страницы */}/>
        </>
    )
}