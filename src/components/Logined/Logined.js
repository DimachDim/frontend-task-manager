import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import getCookie from "../../functions/getCookie";

import { useSelector, useDispatch } from "react-redux";
import { updateUserSid } from "../../slices/userSlice";

// Компоненты
import NavBar from "./NavBar/NavBar";
import CreateTask from "./Tasks/CreateTask/CreateTask";
import MyTasks from "./Tasks/ReadTask/MyTasks/MyTasks";

export default function Logined(){

    // Для работы с состоянием
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // Если в состоянии нет сессии
    if(user.sid === undefined){
        // Берем сессию из куки и сохраняем в состояние
        let sid = getCookie('sid');
        dispatch(updateUserSid(sid))
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