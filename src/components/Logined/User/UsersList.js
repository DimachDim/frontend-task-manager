import React from "react";
import UserItem from "./UserItem";

export default function UsersList(props){

    // Перебираем массив 
    const usresComp = props.users.map((item, index)=>{
        return(
            <UserItem 
                key={index}
                userId={item.userId} 
                userName={item.userName}
            />
        )
    })

    console.log('props', props)
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="list-group">
                    {usresComp}
                </div>
            </div>
        </div>
    )
}