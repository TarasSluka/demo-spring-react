export const UserAction = {
    USER_ADD: 'USER_ADD',
    USER_GET_BY_ID: 'USER_GET_BY_ID',
    USER_GET_ALL: 'USER_GET_ALL',
    USER_DELETE_BY_ID: 'USER_DELETE_BY_ID',
    USER_UPDATE_BY_ID: 'USER_UPDATE_BY_ID'
};

export function addTodo(text) {
    return {type: ADD_TODO, text}
}

export function userGetById(id) {
    return {type: USER_GET_BY_ID, id}
}

export function userGetAll() {
    return {type: USER_GET_ALL}
}

// export const USER_ADD = 'USER_ADD';
// export const USER_GET_BY_ID = 'USER_GET_BY_ID';
// export const USER_GET_ALL = 'USER_GET_ALL';
// export const USER_DELETE_BY_ID = 'USER_DELETE_BY_ID';
// export const USER_UPDATE_BY_ID = 'USER_UPDATE_BY_ID';
