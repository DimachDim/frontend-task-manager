

// Функция для получения значения куки по ключу
export default function getCookie(key) {
    let name = key + "=";                                     // Создаем строку для поиска
    let decodedCookie = decodeURIComponent(document.cookie);  // Декодируем куки, если есть специальные символы
    let ca = decodedCookie.split(';');                        // Разделяем документ на отдельные куки
    for(let i = 0; i < ca.length; i++) {                      // Перебираем все куки
      let c = ca[i];
      // Удаляем пробелы в начале
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      // Проверяем, начинается ли текущее значение куки с искомым именем
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);            // Если да, то возвращаем значение
      }
    }
    // Если ничего не найдено, возвращаем пустую строку
    return "";
  }