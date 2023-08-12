import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { requestUpdateTask } from "../actions";

type Props = {
  id: string;
  title: string;
};

const CompletedTaskItem = ({ id, title }: Props) => {
  const dispatch = useDispatch();

  const handleIncompleteTask = () => {
    dispatch(requestUpdateTask({ id, completed: false }));
  };

  return (
    <button
      key={id}
      className="flex justify-start items-center w-full space-x-4 text-lg line-through"
      onClick={handleIncompleteTask}
    >
      <FiCheckSquare className="text-xl" />
      <span className="truncate text-xl">{title}</span>
    </button>
  );
};

export default CompletedTaskItem;