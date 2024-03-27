import React from "react";
import UserItem from "./UserItem";

export default function UsersList(props){

    let usresComp;

    // Если является массивом
    if(Array.isArray(props.users)){

        // Перебираем массив 
        usresComp = props.users.map((item, index)=>{
            return(
                <UserItem 
                    key={index}
                    userId={item.userId} 
                    userName={item.userName}
                />
            )
        })
    }


    return(
        <div className="container">
            <div className="row">
                <div className="list-group">
                    {usresComp}
                </div>
            </div>
        </div>
    )
}