import React from "react";

export default function ContainerTask(props){
    return(
        <>
            {props.title}
            {props.text}
            {props.token}
        </>
    )
}