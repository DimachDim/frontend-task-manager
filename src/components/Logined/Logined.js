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

export default function Logined(){

    // Для работы с состоянием
    const user = useSelector((state) => state.user);
    const [userInfo, setUserInfo] = useState(null);     // Локальное состояние для запроса
    const dispatch = useDispatch();

    const sid = getCookie('sid');         // Сессия из куки

    // Первый рендоринг
    useEffect(() => {

        // Запрос данных с сервера
        const fetchUserInfo = async () => {
            // Отправляем сессию и ждем ответ
            const response = await getInfoUser(sid);
            // Передаем ответ в локальное состояние
            setUserInfo(response);
        }
        fetchUserInfo();
    }, []);
    
    
    // Если в состоянии нет сессии и информации о пользователе
    if(user.sid === undefined && userInfo != null){
        // Сохраняем сессию в состояние
        dispatch(updateUserSid(sid))
        // Сохраняем инф о пользователе в состояние
        dispatch(updateUserInfo(userInfo))
    }


    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<CreateTask/>                  /* Создание задачи */}/>
                <Route path="/tasks/my-tasks" element={<MyTasks/>       /* Мои задачи */}/>
                <Route path="/logout" element={'Logout'}/>
            </Routes>
        </BrowserRouter>
    )
}