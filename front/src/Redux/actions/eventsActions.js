import { ADD_EVENT, DELETE_EVENT, GET_EVENTS, UPDATE_EVENT } from "../actionsTypes/eventsActionsTypes";
import axiosFactory, { METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT } from "./axiosFactory";

export const addEvent = (eventData) => async (dispatch) => {
    try {
        const { status, errors } = await axiosFactory({
            url: '/event/addEvent',
            method: METHOD_POST,
            data: eventData
        });
        if (status === 200) {
            dispatch({
                type: ADD_EVENT,
                payload: eventData,
            });
        } else {
            dispatch({
                type: "ERROR",
                payload: errors,
            });
        }

    } catch (error) {
        dispatch({
            type: "ERROR",
            payload: error,
        });
    }
};

export const getEvents = () => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: '/event/',
            method: METHOD_GET,
        });
        if (status === 200) {
            dispatch({
                type: GET_EVENTS,
                payload: {
                    events: [...data.data],
                },
            });
        }

    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};

export const deleteEvent = (eventId) => async (dispatch) => {
    try {
        const { status } = await axiosFactory({
            url: `/event/deleteEvent/${eventId}`,
            method: METHOD_DELETE,
        });
        if (status === 200) {
            dispatch({
                type: DELETE_EVENT,
                payload: {
                    id: eventId,
                    succesMessage: "Success",
                    errors: false,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};

export const updateEvent = (eventId, eventData) => async (dispatch) => {
    try {
        const { status } = await axiosFactory({
            url: `/event/updateEvent/${eventId}`,
            method: METHOD_PUT,
            data: eventData
        });
        if (status === 200) {
            dispatch({
                type: UPDATE_EVENT,
                payload: {
                    event: eventData,
                    id: eventId,
                    succesMessage: "Success",
                    errors: false,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};
