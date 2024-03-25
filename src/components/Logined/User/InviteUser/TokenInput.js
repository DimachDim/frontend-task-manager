import React from "react";

export default function TokenInput(props){

    const valueInput = props.token != null ? props.token : '';

    return(
        <>
            <input value={valueInput} readOnly />
            <button onClick={()=>props.generateToken(true)}>Сгенерировать Токен</button>
        </>
    )
}