import { combineReducers } from "@reduxjs/toolkit";
import loadingReducers from "./loadingReducers";
import boardReducer from "./boardReducers";
import errorReducers from "./errorReducers";
import taskReducers from "./taskReducers";
import authReducer from "./authReducers";

const rootReducers = combineReducers({
  isLoading: loadingReducers,
  boards: boardReducer,
  tasks: taskReducers,
  error: errorReducers,
  auth: authReducer
});

export default rootReducers;
