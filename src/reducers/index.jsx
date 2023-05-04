import countReducer from "./CountReducer";
import { combineReducers } from "redux";
import postReducer from "./PostReducer";

const rootReducer = combineReducers({
  count: countReducer,
  posts: postReducer,
});

export default rootReducer;
