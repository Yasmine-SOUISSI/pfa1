import { ADD_BLOG, DELETE_BLOG, GET_BLOGS, GET_BLOG_ID, UPDATE_BLOG } from "../actionsTypes/blogsActionsType";

const initialState = {
    blog: {},
    blogs: [],
    succesMessage: false,
    errors: false,
};

export const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload.blogs,
                succesMessage: action.payload.succesMessage,
                errors: action.payload.errors,
            };
        case GET_BLOG_ID:
            return {
                ...state,
                blog: action.payload,
            };
        case ADD_BLOG:
            return { ...state, blogs: [...state.blogs, action.payload] };
        case UPDATE_BLOG:
            return { ...state, blogs: [...state.blogs.filter(blog => blog._id !== action.payload.id), action.payload.blog] };
        case DELETE_BLOG:
            return { ...state, blogs: [...state.blogs.filter(blog => blog._id !== action.payload.id)] };
        default:
            return state;
    }
};
