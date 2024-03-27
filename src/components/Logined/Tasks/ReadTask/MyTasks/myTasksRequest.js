import { TASKS_MY_TASKS } from "../../../../../paths/Tasks";

export async function getMyTasks(userId){
    
    let response = await fetch(TASKS_MY_TASKS + userId, {
        mode: 'cors',
        method: 'get',
    })
    
    let data = await response.json();

    return data;
    
}