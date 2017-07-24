export default function (states = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
            break;
    }
    return states;

}