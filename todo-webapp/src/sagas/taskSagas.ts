import { call, put, select, takeLatest } from "redux-saga/effects";
import axios from "../utils/axios";
import { addTask, deleteTask, setTasks, setTasksError } from "../actions";
import { TASKS } from "../constants";
import { AxiosError, AxiosRequestConfig } from "axios";
import { RootState } from "../stores";
import { Boards } from "../types/board";
import {
  AddTaskAction,
  DeleteTaskAction,
  Task,
  UpdateTaskAction,
} from "../types/task";

// const sleep = (sec: number) =>
//   new Promise((res) => setTimeout(res, sec * 1000));

// worker sagas
export function* getAllTasksSaga() {
  const { activeBoard }: Boards = yield select(
    (state: RootState) => state.boards
  );
  console.log("[Fetching task for Board ID: ", activeBoard);
  const config: AxiosRequestConfig = {
    method: "get",
    url: `/task/all?boardId=${activeBoard}`,
  };
  try {
    const response: TodoServerResponse<{ count: number; rows: Task[] }> =
      yield call(axios.request, config);

    console.log("[All Tasks Count]: ", response.data.count);
    yield put(setTasks(response.data.rows));
  } catch (error: unknown | AxiosError) {
    console.error(error);
    yield put(setTasksError(error as AxiosError));
  }
}

export function* addTaskSaga(action: AddTaskAction) {
  const { task } = action;
  const config: AxiosRequestConfig = {
    method: "post",
    url: "/task",
    data: task,
  };
  try {
    const response: TodoServerResponse<Task> = yield call(
      axios.request,
      config
    );
    yield put(addTask(response.data));
  } catch (error) {
    console.error(error);
    yield put(setTasksError(error as AxiosError));
  }
}

export function* deleteTaskSaga({ id }: DeleteTaskAction) {
  const config: AxiosRequestConfig = {
    method: "delete",
    url: `/task/${id}`,
  };

  try {
    yield call(axios.request, config);
    yield put(deleteTask(id));
  } catch (error) {
    console.error(error);
    yield put(setTasksError(error as AxiosError));
  }
}

export function* updateTaskSaga(action: UpdateTaskAction) {
  const { task } = action;
  const config: AxiosRequestConfig = {
    method: "put",
    url: `/task/${task.id}`,
    data: task,
  };

  try {
    yield call(axios.request, config);
    yield call(getAllTasksSaga);
  } catch (error) {
    console.error(error);
    yield put(setTasksError(error as AxiosError));
  }
}

// watcher saga
export default function* taskSagas() {
  yield takeLatest(TASKS.LOAD, getAllTasksSaga);
  yield takeLatest(TASKS.REQUEST_ADD_TASK, addTaskSaga);
  yield takeLatest(TASKS.REQUEST_DELETE_TASK, deleteTaskSaga);
  yield takeLatest(TASKS.REQUEST_UPDATE_TASK, updateTaskSaga);
}
