import React from "react";

export default function TokenList(props){

    let tokens; // Тут будет массив компонентов

    // Проверка является ли переданный объект массивом
    if(Array.isArray(props.tokens)){
        // Отзеркаливаем массив
        props.tokens.reverse();
        // Перебираем массив токенов
        tokens = props.tokens.map((item, index)=>{
            return(
                <div key={index}>
                    <div>{item.token}</div>
                    <div>{item.id_invited_user === null 
                            ? 'Пусто'
                            : item.name_invited_user
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