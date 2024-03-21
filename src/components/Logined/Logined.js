import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import getCookie from "../../functions/getCookie";

import { useSelector, useDispatch } from "react-redux";
import { updateSid } from "../../slices/userSlice";

// Компоненты
import NavBar from "./NavBar/NavBar";

export default function Logined(){

    // Для работы с состоянием
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // Если в состоянии нет сессии
    if(user.sid === undefined){
        // Берем сессию из куки и сохраняем в состояние
        let sid = getCookie('sid');
        dispatch(updateSid(sid))
    }

    console.log(user)

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={'Home'}/>
                <Route path="/logout" element={'Logout'}/>
            </Routes>
        </BrowserRouter>
    )
}