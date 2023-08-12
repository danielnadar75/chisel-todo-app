import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores";
import { loadTasks } from "../actions";
import { Boards } from "../types/board";
import { AllTasks } from "../types/task";

type Props = {};

const TaskList = (props: Props) => {
  const { activeBoard }: Boards = useSelector(
    (state: RootState) => state.boards
  );
  const { todo: todoTask }: AllTasks = useSelector(
    (state: RootState) => state.tasks
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeBoard) {
      dispatch(loadTasks());
    }
  }, [dispatch, activeBoard]);

  return (
    <div>
      {todoTask &&
        todoTask.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
    </div>
  );
};

export default TaskList;
