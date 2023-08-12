import { TASKS } from "../constants";
import { Task, AllTasks } from "../types/task";

const initialState = {
  completed: [],
  todo: [],
};

const taskReducers = (state: AllTasks = initialState, action: any) => {
  switch (action.type) {
    case TASKS.LOAD_SUCCESS:
      const todo: Task[] = [];
      const completed: Task[] = [];
      for (let task of action.tasks) {
        if (task.completed) completed.push(task);
        else todo.push(task);
      }
      return { todo, completed };

    case TASKS.ADD_TASK:
      return {
        ...state,
        todo: [action.task, ...state.todo],
      };

    case TASKS.DELETE_TASK:
      return {
        ...state,
        todo: state.todo.filter((task: Task) => task.id !== action.id),
      };

    default:
      return state;
  }
};

export default taskReducers;
