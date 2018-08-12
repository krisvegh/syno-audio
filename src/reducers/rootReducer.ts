import { combineReducers } from "../../node_modules/redux";
import loginReducer from "./loginreducer";

const rootReducer =  combineReducers(
  loginReducer
)

export default rootReducer;
