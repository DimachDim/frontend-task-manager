import BASE_URL from './BaseUrl'

// Тут пути для входа и регистрации

// Создание задачи
export const CREATE_TASK = BASE_URL + '/tasks';

// delete: 'domain/tasks/<id>' Удаление задачи
export const DELETE_TASK = BASE_URL + '/tasks/';

// get: 'domain/tasks/my-tasks/<id>' Чтение задач созданных пользователем
export const TASKS_MY_TASKS = BASE_URL + '/tasks/my-tasks/';

// get: 'domain/tasks/<id>' Чтение одной задачи
export const TASKS_GET_TASK = BASE_URL + '/tasks/';

// put: 'domain/tasks' Изменение записи
export const TASKS_UPDATE_TASK = BASE_URL + '/tasks/';

// delete: 'domain/tasks/<id>' Удаление задачи
export const TASKS_DELETE_TASK = BASE_URL + '/tasks/';

// get: 'domain/tasks/pending-tasks/<id>' Чтение задач назначеных пользователю
export const TASKS_PENDING_TASKS = BASE_URL + '/tasks/pending-tasks/';

