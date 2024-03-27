import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneTask(props){
    
    const {id} = useParams();                       // id переданной задачи
    const [arrData, setArrData] = useState(null)    // Хранит данные с сервера

    // Запрос задачи с сервера
    async function getTask(){
        await fetch('http://taskmanager/tasks/'+id,{method:'get'})
        .then(resp => resp.json()).then(json => setArrData(json) ); 
    }

    useEffect(()=>{
        // Если нет данных. Делаем запрос
        if(arrData === null) getTask()
    },[])

    console.log(arrData)
    return(
        <>
            OneTask{id}
        </>
    )
}