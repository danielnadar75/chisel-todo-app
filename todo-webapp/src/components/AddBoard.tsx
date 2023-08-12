import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestAddBoard } from "../actions";
type Props = {
  handleToggle: (isOpen: boolean) => void;
};

const AddBoard = ({ handleToggle }: Props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(requestAddBoard({ name: title }));
    setTitle("");
    handleToggle(false);
  };
  return (
    <form className="flex flex-col space-y-6 w-96" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full space-y-2">
        <label className="text-lg">Create Board</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg p-2 px-4 focus:outline-none bg-white  border-[1px] border-[#EBE8F1]"
          placeholder="Board Name"
        />
      </div>
      <div className="flex items-center justify-end w-full gap-4">
        <button
          type="button"
          className="flex items-center gap-4 p-2 px-4 text-xl font-semibold text-white bg-red-800 rounded-lg hover:bg-red-700 w-fit"
          onClick={() => {
            setTitle("");
            handleToggle(false);
          }}
        >
          <span>Cancel</span>
        </button>

        <button
          disabled={!title}
          type="submit"
          className="flex items-center gap-4 p-2 px-4 text-xl font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 w-fit"
        >
          <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export default AddBoard;