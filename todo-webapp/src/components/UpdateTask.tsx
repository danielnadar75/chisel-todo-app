import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestUpdateTask } from "../actions";

type Props = {
  id: string;
  title: string;
  description: string;
  toggleIsEditing: (isEditing: boolean) => void;
};

const UpdateTask = ({ id, title, description, toggleIsEditing }: Props) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescriptoin] = useState(description);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!newTitle.trim()) return;

    if (
      newTitle.trim() === title.trim() &&
      newDescription.trim() === description.trim()
    )
      return;

    dispatch(
      requestUpdateTask({ id, title: newTitle, description: newDescription })
    );
    toggleIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(title);
    setNewDescriptoin(description);
    toggleIsEditing(false);
  };
  return (
    <form
      className="flex flex-col space-y-6 w-96 m-auto py-4"
      onSubmit={handleSubmit}
    >
      {/* Input Forms */}
      <div className="flex flex-col w-full space-y-2">
        <label className="text-slate-500 font-semibold" htmlFor="new-title">
          Title
        </label>
        <input
          id="new-title"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full rounded-lg p-2 px-4 focus:outline-none bg-white  border-[1px] border-[#EBE8F1]"
          placeholder="Enter title"
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label className="text-slate-500 font-semibold" htmlFor="new-desc">
          Description
        </label>

        <textarea
          id="new-desc"
          rows={2}
          value={newDescription}
          onChange={(e) => setNewDescriptoin(e.target.value)}
          className="w-full rounded-lg p-2 px-4 focus:outline-none bg-white  border-[1px] border-[#EBE8F1]"
          placeholder="Enter description"
        />
      </div>

      {/* Event Buttons */}
      <div className="flex items-center justify-center w-full gap-4">
        <button
          type="button"
          className="flex items-center gap-4 p-2 px-4 text-md font-semibold text-gray hover:text-red-700 w-fit"
          onClick={handleCancel}
        >
          <span>Cancel</span>
        </button>

        <button
          disabled={
            newTitle.trim() === title.trim() &&
            newDescription.trim() === description.trim()
          }
          type="submit"
          className="flex items-center gap-4 p-2 px-4 text-md font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 w-fit"
        >
          <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export default UpdateTask;
