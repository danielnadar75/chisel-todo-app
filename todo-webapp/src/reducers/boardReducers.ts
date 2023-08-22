import { BOARDS } from "../constants";
import { Board } from "../types/board";

const initialState = {
  list: [],
  activeBoard: "",
};

const boardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BOARDS.LOAD_SUCCESS:
      const boards: Board[] = action.boards.sort(
        (a: Board, b: Board) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

      return {
        list: boards,
        activeBoard: boards[0].id,
      };

    case BOARDS.ADD_BOARD:
      return {
        list: [action.board, ...state.list],
        activeBoard: action.board.id,
      };

    case BOARDS.DELETE_BOARD:
      const updatedBoards = state.list.filter((board: Board) => board.id !== action.id) as Board[]
      return {
        list: updatedBoards,
        activeBoard: updatedBoards[0]?.id,
      };

    case BOARDS.SELECT_BOARD:
      return {
        ...state,
        activeBoard: action.id,
      };

    default:
      return state;
  }
};

export default boardReducer;
