import {UserAction} from '../action/index'

const initialState = {
    userList: []
};

function userStore(state = initialState, action) {
    switch (action.type) {
        case (UserAction.USER_GET_ALL):
            return "get All", state, {

            };

        default:
            return state;
    }


}
