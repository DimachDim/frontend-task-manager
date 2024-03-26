import React from "react";

export default function TokenList(props){

    let tokens; // Тут будет массив компонентов

    // Проверка является ли переданный объект массивом
    if(Array.isArray(props.tokens)){

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
    }
    
    return(
        <>
            {tokens}  
        </>
    )
}