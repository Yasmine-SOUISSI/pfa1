import {
    AUTH_ERROR,
    LOGIN,
    LOGOUT,
    UPDATE_PROFILE,
} from "../actionsTypes/authActionsTypes";

const initialState = {
    isAuthenticated: false,
    user: {},
    succesMessage: false,
    errors: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case LOGOUT:
            return {};
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case "CURRENT_USER":
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};
