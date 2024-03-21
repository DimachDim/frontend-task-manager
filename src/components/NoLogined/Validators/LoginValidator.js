import { CREATE_SID } from "../../../paths/LoginUrl";

export default async function LoginValidator(refUser, refPassword, actionErrorText, actionSid){
    
    // Достаем содержимое полей
    let userName, password;
    userName = refUser.current.value;
    password = refPassword.current.value;
    
    // Проверяем поля на заполненность
    switch(''){
        case userName: 
            actionErrorText('Укажите имя пользователя')
            return

        case password: 
            actionErrorText('Укажите пароль')
            return
    }


    // Если поля заполнены отправляем данные на сервер
    let response = await fetch(CREATE_SID, {
        mode: 'cors',
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            userName: userName,
            password: password,
        }) 
    })  .then(resp => resp.json())
        .then(json => json ); 



    // Если пришел текст ошибки
    if(response.errorText != undefined){
        // Передать текст ошибки в состояние
        actionErrorText(response.errorText)
    
    // Если пришла сессия    
    }else if (response.sid != undefined) {
        // Передаем сессию в состояние
        actionSid(response.sid);
        // Убираем все сообщения об ошибке
        actionErrorText(undefined)
    
    // В остальных случаях
    } else {
        // Непредвиденная ошибка
        actionErrorText('Произошла непредвиденная ошибка')
    }
}