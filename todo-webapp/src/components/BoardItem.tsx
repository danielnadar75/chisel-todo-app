import React from "react";
import { BsFolder, BsFolder2Open } from "react-icons/bs";

type Props = {
  id: string;
  name: string;
  active: boolean;
  handleSelectBoard: (id: string) => void;
};


const BoardItem = ({ id, name, active, handleSelectBoard }: Props) => {
  return (
    <button
      className={`p-2 px-4 bg-[#F6F5F8] rounded-md border-[1px] border-[#EBE8F1] text-lg font-medium hover:bg-blue-700 hover:shadow-md hover:text-white  hover:font-semibold truncate flex items-center justify-start outline-none space-x-4 ${
        active ? "bg-blue-700 shadow-md text-white font-semibold" : ""
      }`}
      onClick={() => handleSelectBoard(id)}
    >
      {active ? (
        <BsFolder2Open className="text-xl font-bold" />
      ) : (
        <BsFolder className="text-xl font-bold" />
      )}

      <div>{name}</div>
    </button>
  );
};

export default BoardItem;
