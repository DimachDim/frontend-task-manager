import { CREATE_TASK } from "../../../../paths/Tasks";

export default async function validatorCreateTask(title, text, executorId, startDate, endDate, sid, actionErrorText, cleanData){


    // Проверяем на пустоту
    switch(true){
        case (title === ''):
            actionErrorText('Укажите заголовок!')
            return

        case (text === ''):
            actionErrorText('Укажите текст задачи!')
            return

        case (executorId === 0):
            actionErrorText('Укажите исполнителя')
            return

        case (startDate === ''):
            actionErrorText('Укажите дату начала')
            return
        
        case (endDate === ''):
            actionErrorText('Укажите дату окончания')
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
            executorId: executorId,
            startDate: startDate,
            endDate: endDate,
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
        cleanData()
    
    // В остальных случаях
    } else {
        // Непредвиденная ошибка
        actionErrorText('Произошла непредвиденная ошибка')
    }

}