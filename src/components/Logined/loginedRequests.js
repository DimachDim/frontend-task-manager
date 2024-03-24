
export async function getInfoUser(sid){
    
    let response = await fetch('http://taskmanager/users/get-info/' + sid, {
        mode: 'cors',
        method: 'get',
    })
    
    let data = await response.json();

    return data;
}