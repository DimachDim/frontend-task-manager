import React from "react";

export default function Select(props){

    const arrUsers = props.users            // Список кользователей
    const value = props.value               // Содержимое поля
    const onExecutor = props.onExecutor   // Передает id исполнителя
    
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
                onChange={(e)=>onExecutor(e.target.value)}
            >
            
                <option value={0}></option>
                {arrUsersComp}
            </select>
        </div>
    )
}