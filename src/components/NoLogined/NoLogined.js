import React from "react";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';

export default function NoLogined(){
    return(
        <BrowserRouter>
            <Link to={'/'}>Login</Link>
            <Link to={'/reg'}>Login</Link>
            <Routes>
                <Route path='/' element={'login'}/>
                <Route path='/reg' element={'reg'}/>
            </Routes>
        </BrowserRouter> 
    )
}