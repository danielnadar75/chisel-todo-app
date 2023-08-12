import React, { useState } from "react";
import { BsPen } from "react-icons/bs";
import { LuTrash } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { requestDeleteTask, requestUpdateTask } from "../actions";
import UpdateTask from "./UpdateTask";

type Props = {
  id: string;
  title: string;
  description: string;
};

const TaskItem = ({ id, title, description }: Props) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const handleTaskCompleted = () => {
    dispatch(requestUpdateTask({ id, completed: true }));
  };

  const handleTaskDelete = () => {
    dispatch(requestDeleteTask(id));
  };

  const handleTaskUpdate = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex flex-row gap-6 p-3 my-2 px-4 rounded-lg bg-white border-[1px] shadow-sm ">
      {isEditing ? (
        <UpdateTask
          id={id}
          title={title}
          description={description}
          toggleIsEditing={setIsEditing}
        />
      ) : (
        <>
          {/* checkbox */}
          <div className="flex self-center">
            <label
              className="inline-flex items-center"
              onChange={handleTaskCompleted}
            >
              <input type="checkbox" className="hidden" />
              <span className="w-6 h-6 inline-block rounded border border-gray-300 hover:cursor-pointer"></span>
            </label>
          </div>

          {/* task card */}
          <div className="flex flex-1 border-[#EBE8F1]">
            <div className="flex flex-col">
              <div className="text-lg font-semibold">{title}</div>
              <div className="font-medium text-base text-[#757c96]">
                {description}
              </div>
            </div>
          </div>

          {/* tags */}
          {/* <div className="m-auto px-3 font-medium text-purple-800 bg-purple-100 w-fit rounded-3xl">
            Tags
          </div> */}

          {/* actions */}
          <div className="flex justify-end self-center gap-4">
            <button onClick={handleTaskUpdate}>
              <BsPen className="text-xl hover:text-blue-900" />
            </button>
            <button onClick={handleTaskDelete}>
              <LuTrash className="text-xl hover:text-red-900" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
