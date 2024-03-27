import React from "react";
import './Style.css'
import { deleteAllCookies } from "../../../functions/deleteCookie";
import {useNavigate} from 'react-router-dom'

export default function Logout(){

    const navigate = useNavigate()

    // обработка клика Ок
    function clickOk(){
        // Очищаем адресную строку
        navigate('/')
        // Удаляем все куки
        deleteAllCookies()
        // Перезагружаем страницу
        document.location.reload(true);
    }

    return(
        <div className="logout">
            <p>Покинуть учетную запись?</p>
            <button onClick={()=>clickOk()} className='btn btn-primary'>OK</button>
        </div>
    )
}