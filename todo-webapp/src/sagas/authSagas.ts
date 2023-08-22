import { call, put, takeLatest } from "redux-saga/effects";
import { AUTH } from "../constants";
import { AxiosRequestConfig } from "axios";
import { login, logout } from "../actions/auth";
import axios from "../utils/axios";

export function* loginSaga(action: any) {
  const config: AxiosRequestConfig = {
    method: "post",
    url: "/auth/signin",
    data: action.user,
  };
  try {
    const response: Authentication = yield call(axios.request, config);
    yield put(login(response));
  } catch (error) {
    console.error("SIGN-IN ERROR: \n", error);
    yield put(logout());
  }
}

//watcher saga
export default function* authSagas() {
  console.log("authSagas");

  yield takeLatest(AUTH.REQUEST_LOGIN, loginSaga);
}
