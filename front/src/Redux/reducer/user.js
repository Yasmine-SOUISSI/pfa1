// import types

const {
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOAD_USER,
  CURRENT_USER,
  LOGOUT_USER,
} = require("../constants/user");

// initialstate
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
};

// pure function=> (state, {type,payload})=>
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true };
    //   payload:{token , msg , user }
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false };
    //   payload: {token , msg , user}
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    case FAIL_USER:
      return { ...state, errors: payload, load: false };
    case CURRENT_USER:
      return { ...state, user: payload.user, isAuth: true };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default userReducer;
