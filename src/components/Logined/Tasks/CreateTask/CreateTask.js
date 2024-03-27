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



export default function CreateTask(){

    // Для работы с редактором текста
    const [title, setTitle] = useState('')                  // Заголовок
    const [text, setText] = useState("")                    // Текст
    const handleChange = value => setText(value)            // При вводе текста меняем состояние
    const [performerId, setPerformerId] = useState(0)       // id исполнителя задачи


    // redux
    const sid = useSelector((state) => state.user.sid);     // Сессия пользователя
    const userId = useSelector((state)=>state.user.userId)  // id текущего пользователя
    const dispatch = useDispatch();                         // Для изменения глобального состояния

    // Для назначения исполнителя
    const [userList, setUserList] = useState(null)          // Из какого списка выбирается пользователь
    const [arrData, setArrData] = useState([])              // Хранит ответ сервера

    // Запрос приглашенных пользователей
    async function getInviteUsers(){
        await fetch('http://taskmanager/users/get-invited/' + userId,{method: 'get'})
        .then(resp => resp.json()).then(json => setArrData(json) );
    }

    // Запрос моих подписчиков
    async function getMyFollowers(){
        await fetch('http://taskmanager/followers/get-my-followers/' + userId,{method: 'get'})
        .then(resp => resp.json()).then(json => setArrData(json) );
    }

    // Запрос на кого подписан пользователь
    async function getMySubscriptions(){
        await fetch('http://taskmanager/followers/get-my-subscriptions/' + userId,{method: 'get'})
        .then(resp => resp.json()).then(json => setArrData(json) );
    }

    // Функция очищения полей
    function cleanData(){
        setTitle('')
        setText('')
        setPerformerId(0)
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


    console.log('Заголовок', title, 'Текст', text, 'Исполнитель', performerId)
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
            <p>Из какого списка выбирать исполнителя?</p>
            <div>
                <input type='radio' name='users-list' value='invited' onChange={(e)=>setUserList(e.target.value)}/>
                <label>Приглашенные пользователи</label>
            </div>
            <div>
                <input type='radio'name='users-list' value='followers' onChange={(e)=>setUserList(e.target.value)}/>
                <label>Мои подписчики</label>
            </div>
            <div>
                <input type='radio'name='users-list' value='subscriptions' onChange={(e)=>setUserList(e.target.value)}/>
                <label>На кого подписан я</label>
            </div>

            {/* Выбор исполнителя */}
            <Select
                users={arrData}
                value={performerId}
                onPerformer={(id)=>setPerformerId(id)}
            />

            {/* Кнопка сохранить */}
            <Button 
                variant="primary" 
                onClick={
                    ()=>validatorCreateTask(
                        // Передаем информацию
                        title,
                        text,
                        performerId,
                        sid,            // Сессия
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