import React from "react";

export default function UsersList(props){

    // Перебираем массив 
    const usresComp = props.users.map((item, index)=>{
        return(
            <div key={index} className='list-group-item'>
                {item.userName}
            </div>
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