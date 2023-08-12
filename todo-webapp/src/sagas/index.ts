import { all } from "redux-saga/effects";
import boardSagas from "./boardSagas";
import taskSagas from "./taskSagas";

export default function* rootSaga() {
  yield all([boardSagas(), taskSagas()]);
}
