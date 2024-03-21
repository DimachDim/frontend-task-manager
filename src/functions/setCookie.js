
// Функция для сохранения куки
// key - ключ
// value - значение
// exdays - количество дней сколько хранить куки
export default function setCookie(key, value, exdays) {
    
    // Создаем объект Date
    let d = new Date();

    // Устанавливаем сколько дней будет храниться куки
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    // Переводим дату в строку
    let expires = "expires="+ d.toUTCString();

    // Сохраняем куки
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}