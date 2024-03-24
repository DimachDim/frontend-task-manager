import React from "react";

import ContainerTask from './ContainerTask'

export default function ListTask(props){

    const arrTasks = props.arrData;             // Массив данных о задачах
    let arrComponentTasks;                      // Будет хранить массив компонентов

    // Преобразование массива в массив компонентов
    arrComponentTasks = arrTasks.map((item, index) =>{
        return <ContainerTask
            key={index}
            title={item.title}
            text={item.text}
            token={item.token}
            userName={item.userName}
        />
    }) 
    
    console.log(arrTasks)

    return(
        arrComponentTasks
    )
}