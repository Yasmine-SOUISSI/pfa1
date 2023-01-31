import { userType } from "../../Admin/utils/helper";
import { ADD_USER, GET_USERS, UPDATE_USER, DELETE_USER } from "../actionsTypes/usersActionsType";
import axiosFactory, { METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT } from "./axiosFactory";

export const addUser = (userData) => async (dispatch) => {
    try {
        const type = userType(userData.type)
        const res = await axiosFactory({
            url: '/auth/register',
            method: METHOD_POST,
            data: { ...userData, ...type }
        });
        if (res.status === 200) {
            dispatch({
                type: ADD_USER,
                payload: false
            });
        } else {
            dispatch({
                type: "ERROR",
                payload: res.error.errors
            });
        }
    } catch (error) {
        dispatch({
            type: "ERROR",
            payload: error,
        });
    }
};

export const getUsers = () => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: '/user/',
            method: METHOD_GET,
        });

        dispatch({
            type: GET_USERS,
            payload: {
                users: data.data,
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

export const deleteUser = (userId) => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: `/user/deleteUser/${userId}`,
            method: METHOD_DELETE,
        });

        dispatch({
            type: DELETE_USER,
            payload: {
                users: data,
                succesMessage: "Success",
                id: userId,
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

export const updateUser = (userId, userData) => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: `/user/updateUser/${userId}`,
            method: METHOD_PUT,
            data: userData
        });
        if (status === 200) {
            dispatch({
                type: UPDATE_USER,
                payload: {
                    users: userData,
                    id: userId,
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

