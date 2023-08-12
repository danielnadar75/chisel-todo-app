import { BOARDS } from "../constants";

const errorReducers = (state = null, action: any) => {
  switch (action.type) {
    case BOARDS.LOAD_FAIL:
      return action.error;
    case BOARDS.LOAD:
    case BOARDS.LOAD_SUCCESS:
    case BOARDS.REQUEST_ADD_BOARD:
    case BOARDS.ADD_BOARD:
    case BOARDS.UPDATE_BOARD:
    case BOARDS.DELETE_BOARD:
      return null;
    default:
      return state;
  }
};

export default errorReducers;
