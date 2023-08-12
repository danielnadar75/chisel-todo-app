import { combineReducers } from "@reduxjs/toolkit";
import loadingReducers from "./loadingReducers";
import boardReducer from "./boardReducers";
import errorReducers from "./errorReducers";
import taskReducers from "./taskReducers";

const rootReducers = combineReducers({
  isLoading: loadingReducers,
  boards: boardReducer,
  tasks: taskReducers,
  error: errorReducers,
});

export default rootReducers;
