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
                <UserItem key={item.id}
                    userId={item.id}
                    userName ={item.username}
                />
        )
    })

    return(
        <>
            <input 
                defaultValue={''} 
                className="form-control" 
                ref={inp}  
                onChange={() => serchInput()} 
                placeholder="Поиск"
            />
            
            <div className="list-group">
                {usersComponents}
            </div>
        </>
    )
}