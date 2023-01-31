import { ADD_SESSION, DELETE_SESSION, GET_SESSIONS, UPDATE_SESSION } from "../actionsTypes/sessionsActionsType";

const initialState = {
    session: {},
    sessions: [],
    succesMessage: false,
    errors: false,
};

export const sessionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SESSIONS:
            return {
                ...state,
                sessions: action.payload.sessions,
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case ADD_SESSION:
            return { ...state, sessions: [...state.sessions, action.payload] };
        case UPDATE_SESSION:
            return { ...state, sessions: [...state.sessions.filter(session => session._id !== action.payload.id), action.payload.session] };
        case DELETE_SESSION:
            return { ...state, sessions: [...state.sessions.filter(session => session._id !== action.payload.id)] };
        default:
            return state;
    }
};
