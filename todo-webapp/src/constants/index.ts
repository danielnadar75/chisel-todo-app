export enum BOARDS {
  LOAD = "BOARDS_LOAD",
  LOAD_SUCCESS = "BOARDS_LOAD_SUCCESS",
  LOAD_FAIL = "BOARDS_LOAD_FAIL",

  REQUEST_ADD_BOARD = "REQUEST_ADD_BOARD",
  ADD_BOARD = "ADD_BOARD",

  UPDATE_BOARD = "UPDATE_BOARD",

  REQUEST_DELETE_BOARD = "REQUEST_DELETE_BOARD",
  DELETE_BOARD = "DELETE_BOARD",

  SELECT_BOARD = "SELECT_BOARD",
}

export enum TASKS {
  LOAD = "TASKS_LOAD",
  LOAD_SUCCESS = "TASKS_LOAD_SUCCESS",
  LOAD_FAIL = "TASKS_LOAD_FAIL",

  REQUEST_ADD_TASK = "REQUEST_ADD_TASK",
  ADD_TASK = "ADD_TASK",

  REQUEST_DELETE_TASK = "REQUEST_DELETE_TASK",
  DELETE_TASK = "DELETE_TASK",

  REQUEST_UPDATE_TASK = "REQUEST_UPDATE_TASK",
  UPDATE_TASK = "UPDATE_TASK",
}

export enum AUTH {
  REQUEST_LOGIN = "REQUEST_LOGIN",
  LOGIN = "LOGIN",

  REQUEST_LOGOUT = "REQUEST_LOGOUT",
  LOGOUT = "LOGOUT",
}
