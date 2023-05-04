import countReducer from "./CountReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
