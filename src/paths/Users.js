import BASE_URL from './BaseUrl'

// get: 'domain/users/get-info/<sid>' Получение информации о пользователе
export const USERS_GET_INFO = BASE_URL + '/users/get-info/'

//get: 'domain/followers/yes-no/<userId>/<frendId> Получает текузего пользователя и второго. Сверяет подписаны они или нет
export const USERS_FOLLOWERS_YES_NO = BASE_URL + '/followers/yes-no/'

//delete: 'domain/followers/<idRecord> Отписаться от пользователя
export const USERS_FOLLOWERS = BASE_URL + '/followers/'

//post: 'domain/followers  Подписаться на пользователя
export const USERS_FOLLOWERS_POST = BASE_URL + '/followers'

//get: 'domain/users/serch-name/<userName>' Получить пользователя по части имени (для поиска)
export const USERS_SERCH_NAME = BASE_URL + '/users/serch-name/'

//get: 'domain/followers/get-my-subscriptions/<id> Получить пользователей на которых подписан
export const USERS_GET_MY_SUBS = BASE_URL + '/followers/get-my-subscriptions/'

//get: 'domain/followers/get-my-followers/<id> Получить пользователей которые подписаны на меня
export const USERS_GET_MY_FOLLOWERS = BASE_URL + '/followers/get-my-followers/'

// get: 'domain/users/get-invited/<id>' Получить приглашенныйх пользователе
export const USERS_GET_INVITED = BASE_URL + '/users/get-invited/'

// post: 'domain/invite-tokens' Создание нового токена приглашения
export const USERS_INVITE_TOKENS = BASE_URL + '/invite-tokens'










