import React, { useState, useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import getCookie from "../../functions/getCookie";

import { useSelector, useDispatch } from "react-redux";
import { updateUserSid, updateUserInfo } from "../../slices/userSlice";

import { getInfoUser } from "./loginedRequests";

// Компоненты
import NavBar from "./NavBar/NavBar";
import CreateTask from "./Tasks/CreateTask/CreateTask";
import MyTasks from "./Tasks/ReadTask/MyTasks/MyTasks";
import InviteUser from './User/InviteUser/InviteUser';
import InvitedUsers from './User/InvitedUsers/InvitedUsers';
import FollowingUsers from './User/FollowingUsers/FollowingUsers';
import Logout from './Logout/Logout';

export default function Logined(){

    // Для работы с состоянием
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(null);     // Локальное состояние для запроса

    const sid = getCookie('sid');         // Сессия из куки

    // Первый рендоринг
    useEffect(() => {
        // Запрос данных с сервера
        const fetchUserInfo = async () => {
            // Отправляем сессию и ждем ответ
            const response = await getInfoUser(sid);
            // Передаем ответ в локальное состояние
            setUserInfo(response.info);
    
            // Проверим, получили ли мы ответ и есть ли текущий sid
            if(response && !user.sid){
                // Сохраняем сессию в состояние
                dispatch(updateUserSid(sid));
                // Сохраняем инфо о пользователе в состояние
                dispatch(updateUserInfo(response.info));
            }
        }
    
        fetchUserInfo();
        // Зависимость от sid и user.sid обеспечивает, что useEffect не будет вызываться множество раз
    }, [sid, user]);


    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<CreateTask/>                  /* Создание задачи */}/>
                <Route path="/tasks/my-tasks" element={<MyTasks/>       /* Мои задачи */}/>
                <Route path="/users/invite" element={<InviteUser/>       /* Пригласить пользователя */}/>
                <Route path="/users/invited" element={<InvitedUsers/>       /* Приглашенные пользователи */}/>
                <Route path="/users/following" element={<FollowingUsers/>       /* Подписки */}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </BrowserRouter>
    )
}