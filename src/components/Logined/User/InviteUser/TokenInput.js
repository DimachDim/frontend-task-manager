import React from "react";

export default function TokenInput(props){

    const valueInput = props.token != null ? props.token : '';

    return(
        <div className="tokens-input">
            <input value={valueInput} readOnly className="form-control"/>
            <button onClick={()=>props.generateToken(true)} className='btn btn-primary'>Сгенерировать Токен</button>
        </div>
    )
}