

export async function getMyTasks(userId){
    
    let response = await fetch('http://taskmanager/tasks/my-tasks/' + userId, {
        mode: 'cors',
        method: 'get',
    })
    
    let data = await response.json();

    return data;
    
}