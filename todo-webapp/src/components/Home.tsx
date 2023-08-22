import React from "react";
import Sidebar from "./Sidebar";
import TaskContainer from "./TaskContainer";
import CompletedTaskList from "./CompletedTask";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <header className="z-10 flex items-center justify-center w-full h-20 shadow-lg">
        <div className="flex items-center justify-between w-4/5">
          <div className="text-3xl font-semibold">Todo App</div>
          <div>
            <button
              className="text-xl font-semibold p-2 px-4 rounded-lg bg-blue-800 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="w-4/5 h-[calc(100%_-_5rem)]  flex">
        <div className="w-[20%] border-r-[1px] border-[#EBE8F1]">
          <Sidebar />
        </div>
        <div className="w-[60%]  border-x-[1px] border-[#EBE8F1] ">
          {/* bg-[#f6f5f8] */}
          <TaskContainer />
        </div>
        <div className="w-[20%]  border-l-[1px] border-[#EBE8F1]">
          <CompletedTaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
