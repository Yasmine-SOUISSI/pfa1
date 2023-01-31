import { ADD_EVENT, DELETE_EVENT, GET_EVENTS, UPDATE_EVENT } from "../actionsTypes/eventsActionsTypes";

const initialState = {
    event: {},
    events: [],
    succesMessage: false,
    errors: false,
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload.events.reverse(),
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case ADD_EVENT:
            return { ...state, events: [action.payload, ...state.events] };
        case UPDATE_EVENT:
            return { ...state, events: [...state.events.filter(event => event._id !== action.payload.id), action.payload.event] };
        case DELETE_EVENT:
            return { ...state, events: [...state.events.filter(event => event._id !== action.payload.id)].reverse() };
        default:
            return state;
    }
};
