import { BOARDS, TASKS } from "../constants";

const loadingReducers = (state = false, action: any) => {
  switch (action.type) {
    case BOARDS.LOAD:
    case TASKS.LOAD:
      return true;

    case BOARDS.LOAD_SUCCESS:
    case BOARDS.LOAD_FAIL:
    case TASKS.LOAD_SUCCESS:
    case TASKS.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducers;
