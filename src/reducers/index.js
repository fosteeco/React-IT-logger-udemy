import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";
/* 
log is state 
 */
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
