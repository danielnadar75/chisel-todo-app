import React from "react";
import { BsFolder, BsFolder2Open } from "react-icons/bs";
import { LuTrash } from "react-icons/lu";

type Props = {
  id: string;
  name: string;
  active: boolean;
  handleSelectBoard: (id: string) => void;
  handleDeleteBoard: (id: string) => void;
};

const BoardItem = ({ id, name, active, handleSelectBoard, handleDeleteBoard }: Props) => {
  return (
    <div
      className={`p-2 px-4 bg-[#F6F5F8] rounded-md border-[1px] border-[#EBE8F1] text-lg font-medium hover:bg-blue-700 hover:shadow-md hover:text-white  hover:font-semibold truncate flex items-center justify-between outline-none  ${
        active ? "bg-blue-700 shadow-md text-white font-semibold" : ""
      }`}
    >
      <button
        className="flex items-center justify-start space-x-4 flex-1"
        onClick={() => handleSelectBoard(id)}
      >
        {active ? (
          <BsFolder2Open className="text-xl font-bold" />
        ) : (
          <BsFolder className="text-xl font-bold" />
        )}

        <div>{name}</div>
      </button>

      <button onClick={() => handleDeleteBoard(id)}>
        <LuTrash className="text-xl" />
      </button>
    </div>
  );
};

export default BoardItem;
