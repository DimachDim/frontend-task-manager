import React from "react";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function NoLogined(){
    return(
        <BrowserRouter>
            <Link to={'/'}><Button>Login</Button></Link>
            <Link to={'/reg'}><Button>Login</Button></Link>
            <Routes>
                <Route path='/' element={'login'}/>
                <Route path='/reg' element={'reg'}/>
            </Routes>
        </BrowserRouter> 
    )
}