import React from "react";
import { useState, useEffect } from "react";
import { useSelector, UseSelector } from "react-redux";
import './Style.css'


export default function UserItem(props){

    const userId1 = useSelector((state)=>state.user.userId)     // id пользователя
    const userId2 = props.userId                                // id того с кем проверяем
    const [frendFlag, setFrendFlag] = useState(null)            // Флаг подписаны вы на него или нет
    const [frendFlag2, setFrendFlag2] = useState(null)          // Флаг подписан он на вас или нет
    const [arrData, setArrData] = useState(null)                // Хранит ответ сервера

    // Запрашивает данные с сервера
    async function getArrData(){
        await fetch('http://taskmanager/followers/yes-no/' + userId1 +'/'+ userId2, {method:'get'})
        .then(resp => resp.json())
        .then(json => {
            setArrData(json)
            setFrendFlag(json.youFollow)
            setFrendFlag2(json.heFollow)
        });
    }

    useEffect(()=>{
        // Если данных нет Запрашиваем данные с сервера
        if(arrData === null){
            getArrData();
        }
    },[arrData])
    

    return(
        <div className='list-group-item'>
            <div>
                {props.userName}
            </div>

            {/* Подписан на вас или нет */}
            <div>
                {frendFlag2
                    ?'Подписан на вас'
                    :'Не подписан на вас'
                }
            </div>

            {/* Кнопка подписаться */}
            <div>
                {frendFlag
                    ?<button className="btn btn-danger">Отписаться</button>
                    :<button className="btn btn-success">Подписаться</button>
                } 
            </div>
        </div>
    )
}