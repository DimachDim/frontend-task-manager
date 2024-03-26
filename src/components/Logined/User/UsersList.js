import React from "react";

export default function UsersList(props){

    // Перебираем массив 
    const usresComp = props.users.map((item, index)=>{
        return(
            <div key={index}>
                {item.userName}
            </div>
        )
    })

    console.log('props', props)
    return(
        <>
            {usresComp}
        </>
    )
}