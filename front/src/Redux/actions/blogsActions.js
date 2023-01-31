import { ADD_BLOG, DELETE_BLOG, GET_BLOGS, GET_BLOG_ID, UPDATE_BLOG } from "../actionsTypes/blogsActionsType";
import axiosFactory, { METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT } from "./axiosFactory";

export const addBlog = (blogData) => async (dispatch) => {
    try {
        const { status, errors } = await axiosFactory({
            url: '/blog/addBlog',
            method: METHOD_POST,
            data: blogData
        });
        if (status === 200) {
            dispatch({
                type: ADD_BLOG,
                payload: blogData,
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

export const getBlogs = () => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: '/blog/',
            method: METHOD_GET,
        });
        dispatch({
            type: GET_BLOGS,
            payload: {
                blogs: [...data.data],
            },
        });
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};
export const getBlogById = (blogId) => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: `/blog/${blogId}`,
            method: METHOD_GET,
        });
        dispatch({
            type: GET_BLOG_ID,
            payload:
                data.data,

        });
    } catch (error) {
        dispatch({
            type: 'Error',
            payload: error,
        });
    }
};

export const deleteBlog = (blogId) => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: `/blog/deleteBlog/${blogId}`,
            method: METHOD_DELETE,
        });

        dispatch({
            type: DELETE_BLOG,
            payload: {
                id: blogId,
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

export const updateBlog = (blogId, blogData) => async (dispatch) => {
    try {
        const { status, data } = await axiosFactory({
            url: `/blog/updateBlog/${blogId}`,
            method: METHOD_PUT,
            data: blogData
        });
        if (status === 200) {
            dispatch({
                type: UPDATE_BLOG,
                payload: {
                    blog: blogData,
                    id: blogId,
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
