import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
// Компоненты
import NavBar from "./NavBar/NavBar";

export default function Logined(){
    return(
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={'Home'}/>
                    <Route path="/logout" element={'Logout'}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}