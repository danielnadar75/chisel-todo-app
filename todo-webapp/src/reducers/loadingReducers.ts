import { BOARDS } from "../constants";

const loadingReducers = (state = false, action: any) => {
  switch (action.type) {
    case BOARDS.LOAD:
      return true;
    case BOARDS.LOAD_SUCCESS:
    case BOARDS.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducers;
