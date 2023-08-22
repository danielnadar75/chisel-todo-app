import { all } from "redux-saga/effects";
import boardSagas from "./boardSagas";
import taskSagas from "./taskSagas";
import authSagas from "./authSagas";

export default function* rootSaga() {
  yield all([authSagas(), boardSagas(), taskSagas()]);
}
