import {
  AUTH_ERROR,
  LOGIN,
  LOGOUT,
  UPDATE_PROFILE,
} from "../actionsTypes/authActionsTypes";
import axiosFactory, {
  METHOD_GET,
  METHOD_POST,
  METHOD_PUT,
} from "./axiosFactory";

export const login = (userData, navigate) => async (dispatch) => {
  try {
    const { status, data } = await axiosFactory({
      url: "/login",
      method: METHOD_POST,
      data: userData,
    });

    if (status === 200) {
      dispatch({
        type: LOGIN,
        payload: {
          isAuthenticated: true,
          user: data,
          succesMessage: "Success",
          errors: false,
        },
      });

      localStorage.setItem("token", data.token);
      navigate("", { replace: true });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          errors: "Invalid email or password",
        },
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};

export const logout = (navigate) => (dispatch) => {
  localStorage.clear();
  navigate("/");
  dispatch({
    type: LOGOUT,
  });
};

export const updateProfile = (userId, userData) => async (dispatch) => {
  try {
    const { status, data } = await axiosFactory({
      url: `/user/updateUser/${userId}`,
      method: METHOD_PUT,
      data: userData,
    });
    if (status === 200) {
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          user: userData,
          succesMessage: "Success",
          errors: false,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: "Error",
      payload: error,
    });
  }
};
export const currentUser = () => async (dispatch) => {
  try {
    const res = await axiosFactory({
      url: "/current",
      method: METHOD_GET,
    });

    dispatch({
      type: LOGIN,
      payload: {
        isAuthenticated: true,
        user: res.data.user,
        succesMessage: "Success",
        errors: false,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};
