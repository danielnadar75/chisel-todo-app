import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../utils/axios";
import { setBoards, setBoardsError, addBoard, deleteBoard } from "../actions";
import { BOARDS } from "../constants";
import { AxiosError, AxiosRequestConfig } from "axios";
import { AddBoardAction, Board, DeleteBoardAction } from "../types/board";

// const sleep = (sec: number) =>
//   new Promise((res) => setTimeout(res, sec * 1000));

// worker sagas
export function* getAllBoardsSaga() {
  const config: AxiosRequestConfig = {
    method: "get",
    url: "/board/all",
  };
  try {
    const response: TodoServerResponse<{ count: number; rows: Board[] }> =
      yield call(axios.request, config);

    console.log("[All Boards Count]: ", response.data.count);
    yield put(setBoards(response.data.rows));
  } catch (error: unknown | AxiosError) {
    console.error(error);
    yield put(setBoardsError(error as AxiosError));
  }
}

export function* addBoardSaga(action: AddBoardAction) {
  const { board } = action;
  const config: AxiosRequestConfig = {
    method: "post",
    url: "/board",
    data: board,
  };

  try {
    const response: TodoServerResponse<Board> = yield call(
      axios.request,
      config
    );
    yield put(addBoard(response.data));
  } catch (error) {
    console.error(error);
    yield put(setBoardsError(error as AxiosError));
  }
}

export function* deleteBoardSaga({ id }: DeleteBoardAction) {
  const config: AxiosRequestConfig = {
    method: "delete",
    url: `/board/${id}`,
  };

  try {
    yield call(axios.request, config);
    yield put(deleteBoard(id));
  } catch (error) {
    console.error(error);
    yield put(setBoardsError(error as AxiosError));
  }
}

// watcher saga
export default function* boardSagas() {
  yield takeLatest(BOARDS.LOAD, getAllBoardsSaga);
  yield takeLatest(BOARDS.REQUEST_ADD_BOARD, addBoardSaga);
  yield takeLatest(BOARDS.REQUEST_DELETE_BOARD, deleteBoardSaga);
}
