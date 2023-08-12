import React, { useEffect } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { loadBoards, selectBoard } from "../actions";
import { Board, Boards } from "../types/board";
import { RootState } from "../stores";

type Props = {};

const BoardList = (props: Props) => {
  const { list: boards, activeBoard }: Boards = useSelector(
    (state: RootState) => state.boards
  );

  const dispatch = useDispatch();

  const handleSelectBoard = (id: string) => {
    dispatch(selectBoard(id));
  };

  useEffect(() => {
    dispatch(loadBoards());
  }, [dispatch]);

  return (
    <div className="flex flex-col p-4 space-y-4 scroll-auto">
      {boards &&
        boards.map((board: Board) => (
          <BoardItem
            key={board.id}
            id={board.id}
            name={board.name}
            active={board.id === activeBoard}
            handleSelectBoard={handleSelectBoard}
          />
        ))}
    </div>
  );
};

export default BoardList;
