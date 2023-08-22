import React from "react";

type Props = {
  isOpen: boolean;
  handleToggle: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ isOpen, handleToggle, className, children }: Props) => {
  return (
    <div
      id='modal'
      className={`fixed w-screen h-screen top-0 inset-0 left-0 z-[100] outline-none focus:outline-none bg-no-repeat bg-center bg-cover flex justify-center items-center ${
        isOpen
          ? "transition-all ease-in duration-300 opacity-100"
          : "transition-all ease-out duration-300 opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => handleToggle(!isOpen)}
        className='fixed z-0 w-screen h-screen shadow bg-gray-900/40 backdrop-blur-sm'
      />

      <div
        role='dialog'
        className={`p-8 relative m-auto bg-white rounded-lg flex justify-center items-center ${
          className ?? ""
        } `}
      >
        <div className='w-full h-full'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
