import { combineReducers } from "redux";
import logReducer from "./logReducer";
/* 
log is state 
 */
export default combineReducers({
  log: logReducer,
});
