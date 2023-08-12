import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { requestAddTask } from "../actions";
import { RootState } from "../stores";

type Props = {};

const AddTask = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { activeBoard } = useSelector((state: RootState) => state.boards);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return;
    dispatch(requestAddTask({ title, description, fk_boardId: activeBoard }));
    setTitle("");
    setDescription("");
  };

  return (
    <form className="flex w-full space-x-4 " onSubmit={handleSubmit}>
      <input
        className="w-4/5 rounded-lg p-2 px-4 focus:outline-none bg-white  border-[1px] border-[#EBE8F1]"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center w-1/5 gap-4 p-2 px-4 text-xl font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700"
      >
        <FiPlus className="text-2xl font-semibold" />
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default AddTask;
