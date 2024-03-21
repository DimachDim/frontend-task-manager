import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
// Компоненты
import NavBAr from "./NavBar/NavBar";

export default function Logined(){
    return(
        <>
            <BrowserRouter>
                <NavBAr/>
                <Routes>
                    <Route path="/" element={'Home'}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}