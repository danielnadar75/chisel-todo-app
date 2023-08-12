import { AxiosError } from "axios";
import { TASKS } from "../constants";
import { AddTask, UpdateTask } from "../types/task";

export const loadTasks = () => ({
  type: TASKS.LOAD,
});

export const setTasks = (tasks: any) => ({
  type: TASKS.LOAD_SUCCESS,
  tasks,
});

export const setTasksError = (error: AxiosError) => ({
  type: TASKS.LOAD_FAIL,
  error,
});

export const requestAddTask = (task: AddTask) => ({
  type: TASKS.REQUEST_ADD_TASK,
  task,
});

export const addTask = (task: AddTask) => ({
  type: TASKS.ADD_TASK,
  task,
});

export const requestDeleteTask = (id: string) => ({
  type: TASKS.REQUEST_DELETE_TASK,
  id,
});

export const deleteTask = (id: string) => ({
  type: TASKS.DELETE_TASK,
  id,
});

export const requestUpdateTask = (task: UpdateTask) => ({
  type: TASKS.REQUEST_UPDATE_TASK,
  task,
});
