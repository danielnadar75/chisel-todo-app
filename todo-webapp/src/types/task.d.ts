import { TASKS } from "../constants";
import { Action } from "@reduxjs/toolkit";

declare type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  fk_boardId: string;
  createdAt: Date;
  updatedAt: Date;
};

declare type AllTasks = {
  todo: Task[];
  completed: Task[];
};

declare type AddTask = Pick<Task, "title" | "description" | "fk_boardId">;

declare interface TasksAction extends Action {
  type: TASKS;
  tasks: Task[];
}

declare interface AddTaskAction extends Action {
  task: AddTask;
}
declare interface DeleteTaskAction extends Action {
  id: string;
}
declare interface UpdateTask {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
}

declare interface UpdateTaskAction extends Action {
  type: TASKS;
  task: UpdateTask;
}
