import React, { useState } from "react";
import { BsFolderPlus } from "react-icons/bs";
import Modal from "../container/Modal";
import BoardList from "./BoardList";
import AddBoard from "./AddBoard";

type Props = {};

const Sidebar = (props: Props) => {
  const [isAddBoardModalOpen, setIsAddBoardModalOpen] =
    useState<boolean>(false);

  return (
    <div className="w-full h-[calc(100%_-_5rem)] pt-3 ">
      <div className="flex flex-col items-end justify-center p-4 space-y-4 scroll-auto">
        <button
          type="button"
          className="flex items-center gap-4 p-2 px-4 text-xl font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700 w-fit"
          onClick={() => {
            setIsAddBoardModalOpen(!isAddBoardModalOpen);
          }}
        >
          <BsFolderPlus className="text-2xl font-semibold" />
          <span>Add Board</span>
        </button>
      </div>

      <BoardList />

      <Modal isOpen={isAddBoardModalOpen} handleToggle={setIsAddBoardModalOpen}>
        <AddBoard handleToggle={setIsAddBoardModalOpen} />
      </Modal>
    </div>
  );
};

export default Sidebar;
