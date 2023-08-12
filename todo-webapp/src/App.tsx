import React from "react";
import "./app.css";
import { FiPlus, FiPlusCircle } from "react-icons/fi";
import Board from "./Board";
import Container from "./components/Container";
import CompletedTaskList from "./components/CompletedTask";
import Sidebar from "./components/Sidebar";

/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <header className='z-10 flex items-center justify-center w-full h-20 shadow-lg'>
        <div className='flex items-center justify-between w-4/5'>
          <div className='text-3xl font-semibold'>Todo App</div>
        </div>
      </header>
      <div className='w-4/5 h-[calc(100%_-_5rem)]  flex'>
        <div className='w-[20%] border-r-[1px] border-[#EBE8F1]'>
          <Sidebar />
        </div>
        <div className='w-[60%]  border-x-[1px] border-[#EBE8F1] '>
          {/* bg-[#f6f5f8] */}
          <Container />
        </div>
        <div className='w-[20%]  border-l-[1px] border-[#EBE8F1]'>
          <CompletedTaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
