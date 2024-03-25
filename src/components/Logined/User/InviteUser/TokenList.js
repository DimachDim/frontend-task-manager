import React from "react";

export default function TokenList(props){

    // Перебираем массив токенов
    const tokens = props.tokens.map((item, index)=>{
        return(
            <div key={index}>
                <div>{item.token}</div>
                <div>{item.id_invited_user === null 
                        ? 'Пусто'
                        : ''
                    }
                </div>
            </div>
        )
    })
    
    console.log(props.tokens)
    return(
        <>
            {tokens}  
        </>
    )
}