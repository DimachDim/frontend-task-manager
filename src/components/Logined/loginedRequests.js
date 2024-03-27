import { USERS_GET_INFO } from "../../paths/Users";


export async function getInfoUser(sid){
    
    let response = await fetch(USERS_GET_INFO + sid, {
        mode: 'cors',
        method: 'get',
    })
    
    let data = await response.json();

    return data;
}