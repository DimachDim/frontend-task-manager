import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';

import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ContainerTask(props){

    const text = props.text
    const userName = useSelector((state) => state.user.userName);

    // Первая отрисовка
    useEffect(()=>{

        // Отправка на сервер id задачи которую нужно удалить
        async function deleteTask(){
            await fetch()
        }
    })
    console.log(userName)
    return(
        <div className="card container-task" >
            <div className="card-body">
                <div className="task-content" style={{height: '20rem'}}>   

                    {/* Кнопа удаления */}
                    {userName === props.userName 
                        ? <CloseButton style={{position: 'absolute', top: 10, right: 10}} onClick={()=>console.log('ok')}/>
                        : ''
                    }

                    {/* Заголовок */} 
                    <h5 className="card-title">{props.title}</h5>
                    
                    {/* Текст */}
                    <p className="card-text container-task-text" dangerouslySetInnerHTML={{__html: text}}></p>
                    
                    {/* Токен */}
                    <p className="card-text">Token: {props.token}</p>
                    
                    {/* Имя создателя */}
                    <p className="card-text">User Name: {props.userName}</p>
                </div>
            </div>
        </div>
    )
}