import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import './Style.css'

export default function OneTask(props){
    
    const {id} = useParams();                               // id переданной задачи
    const [arrData, setArrData] = useState(null)            // Хранит данные с сервера
    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const navigate = useNavigate()                          // Для управления строкой url

    // Запрос задачи с сервера
    async function getTask(){
        await fetch('http://taskmanager/tasks/'+id,{method:'get'})
        .then(resp => resp.json()).then(json => setArrData(json) ); 
    }

    // Функция удаляет задачу
    async function deleteTask(){
        await fetch('http://taskmanager/tasks/' + id,{method:'delete'})
        // Переходим назад по истории
        navigate(-1)
    }

    useEffect(()=>{
        // Если нет данных. Делаем запрос
        if(arrData === null) getTask()
    },[])

    console.log(arrData)
    // Если есть данные отрисовываем страницу
    if(arrData != null){
        return(
            <div className="one-task container">
                <div>{arrData.title}</div>
                <div dangerouslySetInnerHTML={{__html: arrData.text}}></div>
                <div>Token: {arrData.token}</div>
                <div>Статус: {arrData.statusName}</div>
                <div>Создатель задачи: {arrData.userNameCreator}</div>
                <div>Назначенный исполнитель: {arrData.userNameExecutor}</div>
                <div>Дата начала: {arrData.date_start}</div>
                <div>Дата окончания: {arrData.date_end}</div>
                
                {/* Если задача создана вами то рисуем кнопку удалить */}
                {arrData.id_user_creator === userId
                    ? <button className="btn btn-danger" onClick={()=>deleteTask()}>Удалить</button>
                    : ''
                }
            </div>
        )
    }
}