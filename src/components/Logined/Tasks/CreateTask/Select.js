import React from "react";

export default function Select(props){

    const arrUsers = props.users            // Список кользователей
    const value = props.value               // Содержимое поля
    const onPerformer = props.onPerformer   // Передает id исполнителя
    
    // Конвертируем в компоненты
    const arrUsersComp = arrUsers.map((item)=>{
        return (
            <option key={item.userId} value={item.userId}>{item.userName}</option>
        )
    })
    

    return(
        <div>
            <select 
                className="form-select"  
                value={value} 
                onChange={(e)=>onPerformer(e.target.value)}
            >
            
                <option value={0}></option>
                {arrUsersComp}
            </select>
        </div>
    )
}