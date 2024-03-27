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
    
    const [idRecord, setIdRecord] = useState(null)              // id записи в базе

    // Запрашивает данные с сервера
    async function getArrData(){
        await fetch('http://taskmanager/followers/yes-no/' + userId1 +'/'+ userId2, {method:'get'})
        .then(resp => resp.json())
        .then(json => {
            setArrData(json)                    // Сохраняем данные
            // Устанавливаем флаги
            setFrendFlag(json.youFollow)
            setFrendFlag2(json.heFollow)
            // Устанавливаем id записи в базе
            setIdRecord(json.idRecord)
        });
    }

    // Обработка клика ОТПИСАТЬСЯ
    async function clickUnsubscribe(){
        
        await fetch('http://taskmanager/followers/' + idRecord,{method:'delete'})
            .then(resp => resp.json())
            .then(json => setFrendFlag(json.youFollow));
    }

    // Обработка клика ПОДПИСАТЬСЯ
    async function clickSubscribe(){
        await fetch('http://taskmanager/followers',{
            method:'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                userId1: userId1,   // id пользователя
                userId2: userId2,   // id на кого надо подписаться
            }) 
        })  .then(resp => resp.json())
            .then(json =>{
                setFrendFlag(json.youFollow)    // меняем флаг- мы подписаны на него true
                setIdRecord(json.idRecord)      // устанавливаем id записи в базе
            }); 
        
    }

    useEffect(()=>{
        // Если данных нет Запрашиваем данные с сервера
        if(arrData === null){
            getArrData();
        }
    },[arrData,frendFlag, idRecord])
    

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
                    ?<button className="btn btn-danger" onClick={()=>clickUnsubscribe()}>Отписаться</button>
                    :<button className="btn btn-success" onClick={()=>clickSubscribe()}>Подписаться</button>
                } 
            </div>
        </div>
    )
}