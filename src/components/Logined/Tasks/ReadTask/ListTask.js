import React from "react";
import './Tasks.css'

import ContainerTask from './ContainerTask'

export default function ListTask(props){

    const arrTasks = props.arrData;             // Массив данных о задачах
    let arrComponentTasks;                      // Будет хранить массив компонентов

    // Если arrTasks является массивом
    if(Array.isArray(arrTasks)){

        // Преобразование массива в массив компонентов
        arrComponentTasks = arrTasks.map((item, index) =>{
            
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3"  key={index}>
                    <ContainerTask
                        key={index}
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        token={item.token}
                        userName={item.userName}
                        
                        refreshPerent={props.refreshPerent    /* Функция обнавления */}
                        />
                </div>
            )
       }) 
    }
    

    return(
        <div className="container list-task">
            <div className="row">
                {arrComponentTasks}
            </div>
        </div>
    )
}