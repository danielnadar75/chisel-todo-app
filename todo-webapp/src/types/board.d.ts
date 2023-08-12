import { Action } from "@reduxjs/toolkit";

declare type Board = {
  id: string;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

declare type Boards = {
  list: Board[];
  activeBoard: string;
}

declare type AddBoard = Pick<Board, "name">;

declare interface AddBoardAction extends Action {
  board: AddBoard;
}

declare interface DeleteBoardAction extends Action {
  id: string;
}
