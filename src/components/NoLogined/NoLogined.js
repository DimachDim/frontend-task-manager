import React from "react";
import { useState } from "react";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

// Компоненты
import Login from "./Login";
import Registration from "./Registration";


export default function NoLogined(){

    // Стилизация переключения кнопок
    const [link, setLink] = useState('login');
    const checkLogin = link === 'login' ? 'success' :"secondary";
    const checkReg = link === 'reg' ? 'success' :"secondary";

    return(
        <div className="position-absolute top-50 start-50 translate-middle">

            <BrowserRouter>
                {/* Ссылки */}
                <Link to={'/'}>
                    <Button variant={checkLogin} onClick={()=>setLink('login')}>Login</Button>
                </Link>
                
                <Link to={'/reg'}>
                    <Button variant={checkReg} onClick={()=>setLink('reg')}>Registration</Button>
                </Link>
                
                {/* Представления */}
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/reg' element={<Registration/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}