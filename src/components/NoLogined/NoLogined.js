import React from "react";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

// Компоненты
import Login from "./Login";
import Registration from "./Registration";


export default function NoLogined(){
    return(
        <div className="position-absolute top-50 start-50 translate-middle">

            <BrowserRouter>
                {/* Ссылки */}
                <Link to={'/'}>
                    <Button variant="">Login</Button>
                </Link>
                
                <Link to={'/reg'}>
                    <Button>Registration</Button>
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