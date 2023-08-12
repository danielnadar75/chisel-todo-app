import { AxiosError } from "axios";
import { BOARDS } from "../constants/index";
import { AddBoard, Board } from "../types/board";

export const loadBoards = () => ({
  type: BOARDS.LOAD,
});

export const setBoards = (boards: Board[]) => ({
  type: BOARDS.LOAD_SUCCESS,
  boards,
});

export const setBoardsError = (error: AxiosError) => ({
  type: BOARDS.LOAD_FAIL,
  error,
});

export const requestAddBoard = (board: AddBoard) => ({
  type: BOARDS.REQUEST_ADD_BOARD,
  board,
});

export const addBoard = (board: Board) => ({
  type: BOARDS.ADD_BOARD,
  board,
});

export const requestDeleteBoard = (id: string) => ({
  type: BOARDS.REQUEST_DELETE_BOARD,
  id,
});

export const deleteBoard = (id: string) => ({
  type: BOARDS.DELETE_BOARD,
  id,
});

export const selectBoard = (id: string) => ({
  type: BOARDS.SELECT_BOARD,
  id,
});
