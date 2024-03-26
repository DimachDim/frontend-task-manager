import React from "react";
import { useState, useEffect } from "react";
import { useSelector, UseSelector } from "react-redux";


export default function UserItem(props){

    const userId1 = useSelector((state)=>state.user.userId)     // id пользователя
    const userId2 = props.userId                                // id того с кем проверяем
    const [frendFlag, setFrendFlag] = useState(null)            // Флаг подписаны вы на него или нет
    const [frendFlag2, setFrendFlag2] = useState(null)          // Флаг подписан он на вас или нет
    const [arrData, setArrData] = useState(null)

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
            {props.userName}
            
            {/* Подписан на вас или нет */}
            {frendFlag2
                ?'Подписан на вас'
                :'Не подписан на вас'
            }
            {/* Кнопка подписаться */}
            {frendFlag
                ?<button>Отписаться</button>
                :<button>Подписаться</button>
            }
            
        </div>
    )
}