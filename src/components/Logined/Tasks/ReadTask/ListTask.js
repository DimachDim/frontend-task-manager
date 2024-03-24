import React from "react";
import './Tasks.css'

import ContainerTask from './ContainerTask'

export default function ListTask(props){

    const arrTasks = props.arrData;             // Массив данных о задачах
    let arrComponentTasks;                      // Будет хранить массив компонентов

    // Преобразование массива в массив компонентов
    arrComponentTasks = arrTasks.map((item, index) =>{

        const strLen = 150; // Длинна текста
        // Обрезаем текст
        if(item.text.length > strLen){
            item.text = item.text.substring(0, strLen)
        }
        

        return (
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3"  key={index}>
                <ContainerTask
                    key={index}
                    title={item.title}
                    text={item.text}
                    token={item.token}
                    userName={item.userName}
                />
            </div>
        )
    }) 
    

    return(
        <div className="container list-task">
            <div className="row">
                {arrComponentTasks}
            </div>
        </div>
    )
}