import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores";
import CompletedTaskItem from "./CompletedTaskItem";

type Props = {};

const CompletedTaskList = (props: Props) => {
  const { completed: completedTask } = useSelector(
    (state: RootState) => state.tasks
  );

  return (
    <div className="flex flex-col w-full h-full p-4 pt-3 space-y-4 ">
      <div className="text-2xl font-semibold">Completed Tasks</div>
      <div className="flex flex-col w-full space-y-1 scroll-auto">
        {!!completedTask.length ? completedTask.map((task) => (
          <CompletedTaskItem key={task.id} id={task.id} title={task.title} />
        )) : <p className="text-slate-500">No Completed Tasks</p>}
      </div>
    </div>
  );
};

export default CompletedTaskList;
