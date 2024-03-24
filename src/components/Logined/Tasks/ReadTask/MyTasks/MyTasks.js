import React from "react";
import { useSelector } from "react-redux";

export default function MyTasks(){

    // Данные из состояния
    const user = useSelector((state) => state.user);

    /*
    // Делаем запрос на сервер
    let response = await fetch('http://taskmanager/tasks/my-tasks/' + user.userId, {
        mode: 'cors',
        method: 'get',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    })  .then(resp => resp.json())
    .then(json => json ); 
    */

    //console.log(user)

    return(
        <>
            MyTasks
        </>
    )
}