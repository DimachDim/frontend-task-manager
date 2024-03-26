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
                <div key={index} className='list-group-item'>
                    <div className="list-group-item-token">{item.token}</div>
                    <div className="list-group-item-user">{item.id_invited_user === null 
                            ? <p style={{color:'grey'}}>Пусто</p>
                            : item.name_invited_user
                        }
                    </div>
                </div>
            )
        })
    }
    return(
        <div className="list-group">
            <div style={{fontWeight: 'bold'}} className="list-group-item">
                <div>Токен</div>
                <div className="list-group-item-user">Пользователь</div>
            </div>

            {tokens}  
        </div>
    )
}