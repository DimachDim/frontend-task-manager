import React from "react";

export default function UserItem(props){
    return(
        <div className='list-group-item'>
            {props.userName}
            <button>Подписаться</button>
        </div>
    )
}