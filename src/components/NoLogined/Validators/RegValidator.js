//Urls
import {CREATE_USER} from '../../../paths/LoginUrl'



export default async function RegValidator(refToken, refUserName, refPassword, refRepeatPasword, actionErrorText, actionSid){
    
    // Достаем содержимое полей
    let token, userName, password, repeatPasword;
    token = refToken.current.value;
    userName = refUserName.current.value;
    password = refPassword.current.value;
    repeatPasword = refRepeatPasword.current.value;
    
    // Проверяем поля на заполненность
    switch(''){
        case token: 
            actionErrorText('Укажите токен. Его вам должен дать пригласивший пользователь')
            return
        
        case userName: 
            actionErrorText('Укажите имя пользователя')
            return

        case password: 
            actionErrorText('Укажите пароль')
            return

        case repeatPasword: 
            actionErrorText('Укажите пароль повторно')
            return
    }

    // Проверка паролей на идентичность
    if(password !== repeatPasword){
        actionErrorText('Пароли не совпадают')
        return;
    }

    // Если поля заполнены отправляем данные на сервер
    let response = await fetch(CREATE_USER, {
        mode: 'cors',
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            userName: userName,
            password: password,
            token: token
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