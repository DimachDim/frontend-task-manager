import React from "react";
import UserItem from "../UserItem";

export default function SerchByName(props){
    
    let inp = React.createRef();    // ссылка на инпут

    // Функция вызывается при вводе
    function serchInput(){
        props.serch(inp.current.value)
    }

    // Перебираем массив в массив компонентов
    const usersComponents = props.users.map((item, index)=>{
        return(
            <div key={item.id} className="list-group">
                <UserItem 
                    userId={item.id}
                    userName ={item.username}
                />
            </div>
        )
    })

    return(
        <>
            <input defaultValue={''} className="form-control" ref={inp}  onChange={() => serchInput()}/>
            {usersComponents}
        </>
    )
}