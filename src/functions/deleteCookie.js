

// Удаляет все куки
export function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let equalsPos = cookie.indexOf("=");
        let name = equalsPos > -1 ? cookie.substr(0, equalsPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}