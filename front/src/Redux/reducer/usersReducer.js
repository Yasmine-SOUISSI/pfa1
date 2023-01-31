import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "../actionsTypes/usersActionsType";

const initialState = {
    user: {},
    users: [],
    succesMessage: false,
    errors: false,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case ADD_USER:
            return {
                ...state, errors: action.payload
            };
        case UPDATE_USER:
            return { ...state, users: [...state.users.filter(user => user._id !== action.payload.id), action.payload.user] };
        case DELETE_USER:
            return { ...state, users: [...state.users.filter(user => user._id !== action.payload.id)] };
        case 'ERROR':
            return {
                ...state, errors: action.payload
            };
        default:
            return state;
    }
};
