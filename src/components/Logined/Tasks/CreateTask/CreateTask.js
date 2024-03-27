import React from "react";
import './Style.css'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateErrorText } from "../../../../slices/userSlice";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // импорт стилей Quill

import validatorCreateTask from "./ValidatorCreateTask";
import Select from "./Select";
import Dates from "./Dates";

import { USERS_GET_INVITED, USERS_GET_MY_FOLLOWERS, USERS_GET_MY_SUBS } from "../../../../paths/Users";

export default function CreateTask(){

    // Для работы с редактором текста
    const [title, setTitle] = useState('')                  // Заголовок
    const [text, setText] = useState("")                    // Текст
    const handleChange = value => setText(value)            // При вводе текста меняем состояние
    const [executorId, setExecutorId] = useState(0)         // id исполнителя задачи
    const [startDate, setStartDate] = useState('')          // Дата начала задачи
    const [endDate, setEndDate] = useState('')              // Дата конца задачи

    // redux
    const sid = useSelector((state) => state.user.sid);     // Сессия пользователя
    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const dispatch = useDispatch();                         // Для изменения глобального состояния

    // Для назначения исполнителя
    const [userList, setUserList] = useState(null)          // Из какого списка выбирается пользователь
    const [arrData, setArrData] = useState([])              // Хранит ответ сервера

    // Запрос приглашенных пользователей
    async function getInviteUsers(){
        await fetch(USERS_GET_INVITED + userId,{method: 'get'})
        .then(resp => resp.json()).then(json => setArrData(json) );
    }

    // Запрос моих подписчиков
    async function getMyFollowers(){
        await fetch(USERS_GET_MY_FOLLOWERS + userId,{method: 'get'})
        .then(resp => resp.json()).then(json => setArrData(json) );
    }

    // Запрос на кого подписан пользователь
    async function getMySubscriptions(){
        await fetch(USERS_GET_MY_SUBS + userId,{method: 'get'})
        .then(resp => resp.json()).then(json => setArrData(json) );
    }

    // Функция очищения полей
    function cleanData(){
        setTitle('')
        setText('')
        setExecutorId(0)
        setStartDate('')
        setEndDate('')
    }

    useEffect(()=>{
        // ЗАПРОС СПИСКА ПОЛЬЗОВАТЕЛЕЙ
        // Если выбрано приглашенные пользователи. Запрашиваем данные
        if(userList === 'invited')  getInviteUsers()
        // Если выбрано мои подписчики. Запрашиваем данные
        if(userList === 'followers')  getMyFollowers()
        // Если выбрано на кого подписан я. Запрашиваем данные
        if(userList === 'subscriptions')  getMySubscriptions()

    },[userId, userList])


    console.log(startDate, endDate)
    return(
        <Form className="mx-lg-5 create-task-form">

            {/* Заголовок задачи */}
            <Form.Group className="mb-3">
                <Form.Label>Заголовок Задачи</Form.Label>
                <Form.Control type="username" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>

            {/* Редактор теста */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Описание задачи</Form.Label>    
                <ReactQuill 
                    value={text} 
                    className="mb-5"
                    style={{height: '300px'}}
                    onChange={handleChange  /* При вводе передает текст в состояние */} 
                /> 
            </Form.Group>

            {/* Выбор в каком списке искать */}
            <div className="why-list">   
                <p>Из какого списка выбирать исполнителя?</p>
                <div>
                    <div>
                        <input className="form-check-input" type='radio' name='users-list' value='invited' onChange={(e)=>setUserList(e.target.value)}/>
                        <label>Приглашенные пользователи</label>
                    </div>
                    <div>
                        <input className="form-check-input" type='radio'name='users-list' value='followers' onChange={(e)=>setUserList(e.target.value)}/>
                        <label>Мои подписчики</label>
                    </div>
                    <div>
                        <input className="form-check-input" type='radio'name='users-list' value='subscriptions' onChange={(e)=>setUserList(e.target.value)}/>
                        <label>На кого подписан я</label>
                    </div>
                </div>
            </div>

            {/* Выбор исполнителя */}
            <Select
                users={arrData}
                value={executorId}
                onExecutor={(id)=>setExecutorId(id)}
            />

            {/* Установка даты */}
            <Dates
                startDate={startDate}
                endDate={endDate}
                setStartDate={(e)=>setStartDate(e)}
                setEndDate={(e)=>setEndDate(e)}
            />

            {/* Кнопка сохранить */}
            <Button 
                variant="primary" 
                onClick={
                    ()=>validatorCreateTask(title,text,executorId,startDate,endDate,sid,
                        // Функция передачи текста ошибки
                        (text)=> dispatch(updateErrorText(text)),
                        // Функция очищает поля
                        ()=> cleanData()
                        )
                    }
                    >
                Создать задачу
            </Button>
        </Form>
    )
}