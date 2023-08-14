import { BOARDS, TASKS } from "../constants";

const errorReducers = (state = null, action: any) => {
  switch (action.type) {
    case BOARDS.LOAD_FAIL:
    case TASKS.LOAD_FAIL:
      return action.error;

    case BOARDS.LOAD:
    case BOARDS.LOAD_SUCCESS:
    case BOARDS.REQUEST_ADD_BOARD:
    case BOARDS.ADD_BOARD:
    case BOARDS.UPDATE_BOARD:
    case BOARDS.DELETE_BOARD:
    case TASKS.REQUEST_ADD_TASK:
    case TASKS.ADD_TASK:
    case TASKS.REQUEST_DELETE_TASK:
    case TASKS.DELETE_TASK:
    case TASKS.REQUEST_UPDATE_TASK:
    case TASKS.UPDATE_TASK:
      return null;

    default:
      return state;
  }
};

export default errorReducers;
