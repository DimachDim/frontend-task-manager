
//Urls

export default function RegValidator(refToken, refUserName, refPassword, refRepeatPasword, actionErrorText){
    
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

}