import { CREATE_TASK } from "../../../../paths/Tasks";

export default async function validatorCreateTask(refTitle, refText, sid, actionErrorText, actionInpText){

    // Достаем содержимое
    const title = refTitle.current.value;
    const text = refText.current.value;

    // Проверяем на пустоту
    switch(''){
        case title:
            actionErrorText('Укажите заголовок!')
            return

        case text:
            actionErrorText('Укажите текст задачи!')
            return
    }

    // Отправляем данные на сервер
    let response = await fetch(CREATE_TASK, {
        mode: 'cors',
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            title: title,
            text: text,
            sid: sid
        }) 
    })  .then(resp => resp.json())
    .then(json => json ); 
    

    // Если пришел текст ошибки
    if(response.errorText != undefined){
        // Передать текст ошибки в состояние
        actionErrorText(response.errorText)
    
    // Если задача создана    
    }else if (response === true) {
        
        alert('Задача создана')
        // Убираем все сообщения об ошибке
        actionErrorText(undefined)
        // Очищение полей
        refTitle.current.value = '';
        actionInpText('')
    
    // В остальных случаях
    } else {
        // Непредвиденная ошибка
        actionErrorText('Произошла непредвиденная ошибка')
    }

}