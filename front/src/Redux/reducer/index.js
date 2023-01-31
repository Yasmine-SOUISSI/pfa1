import { combineReducers } from "redux";
import userReducer from "./user";
import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";
import { blogsReducer } from "./blogsReducer";
import { sessionsReducer } from "./sessionsReducer";
import { eventsReducer } from "./eventsReducer";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  usersReducer,
  blogsReducer,
  sessionsReducer,
  eventsReducer,
});
export default rootReducer;
