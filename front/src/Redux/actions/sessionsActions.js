import { ADD_SESSION, GET_SESSIONS, UPDATE_SESSION, DELETE_SESSION } from "../actionsTypes/sessionsActionsType";
import axiosFactory, { METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT } from "./axiosFactory";

export const addSession = (sessionData) => async (dispatch) => {
    try {

        const { status, errors } = await axiosFactory({
            url: '/sessions/addSession',
            method: METHOD_POST,
            data: sessionData
        });
        dispatch({
            type: ADD_SESSION,
            payload: sessionData,
        });
    } catch (error) {
        dispatch({
            type: "ERROR",
            payload: error,
        });
    }
};

export const getSessions = () => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: '/sessions/',
            method: METHOD_GET,
        });

        dispatch({
            type: GET_SESSIONS,
            payload: {
                sessions: data.data,
                succesMessage: "Success",
                errors: false,
            },
        });
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};

export const deleteSession = (sessionId) => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: `/sessions/deleteSession/${sessionId}`,
            method: METHOD_DELETE,
        });

        dispatch({
            type: DELETE_SESSION,
            payload: {
                id: sessionId,
                succesMessage: "Success",
                errors: false,
            },
        });
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};

export const updateSession = (sessionId, sessionData) => async (dispatch) => {
    try {

        const { status, data } = await axiosFactory({
            url: `/sessions/updateSession/${sessionId}`,
            method: METHOD_PUT,
            data: sessionData
        });

        dispatch({
            type: UPDATE_SESSION,
            payload: {
                session: sessionData,
                id: sessionId,
                succesMessage: "Success",
                errors: false,
            },
        });
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};

