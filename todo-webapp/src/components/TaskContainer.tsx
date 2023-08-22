import React from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

type Props = {};

const TaskContainer = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col space-y-6 bg-[#f5f5fa]">
      <div className="w-full p-4 py-6 border-b-[1px] border-[#EBE8F1] bg-white">
        <AddTask />
      </div>
      <div className="w-full h-full p-4 py-6 space-y-6 ">
        <TaskList />
      </div>
    </div>
  );
};

export default TaskContainer;
