import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import './Style.css'

import { TASKS_GET_TASK, TASKS_UPDATE_TASK, TASKS_DELETE_TASK } from "../../../../../paths/Tasks";

export default function OneTask(props){
    
    const {id} = useParams();                               // id переданной задачи
    const [arrData, setArrData] = useState(null)            // Хранит данные с сервера
    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const navigate = useNavigate()                          // Для управления строкой url


    // Запрос задачи с сервера
    async function getTask(){
        await fetch(TASKS_GET_TASK+id,{method:'get'})
        .then(resp => resp.json()).then(json => setArrData(json) ); 
    }

    // Функция изменяет статус задачи
    async function updateTask(status){
        await fetch(TASKS_UPDATE_TASK + id,{
            method:'put',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                status: status,
            }) 
        }).then(resp => resp.json()).then(json => console.log(json) ); 
        // Обнуляем данные от сервера чтоб они запросились еще раз
        setArrData(null)
    }

    // Функция удаляет задачу
    async function deleteTask(){
        await fetch(TASKS_DELETE_TASK + id,{method:'delete'})
        // Переходим назад по истории
        navigate(-1)
    }

    useEffect(()=>{
        // Если нет данных. Делаем запрос
        if(arrData === null) getTask()
    },[arrData])

    //console.log(arrData)
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

                {/* Если задача назначена пользователю то рисуем кнопки изменения статуса */}
                {arrData.id_user_executor === userId
                    ? 
                    <div>
                        <p>Изменить статус задачи</p>
                        <button className="btn btn-primary" onClick={()=>updateTask(1)}>В работе</button>
                        <button className="btn btn-success" onClick={()=>updateTask(2)}>Завершена</button>
                        <button className="btn btn-secondary" onClick={()=>updateTask(4)}>Отложено</button>
                    </div>
                    : ''
                }
            </div>
        )
    }
}