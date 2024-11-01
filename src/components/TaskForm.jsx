import React from "react";

export const TaskForm = ({ newTask, onTaskChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="flex gap-4">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => onTaskChange({ ...newTask, title: e.target.value })}
          className="flex-1 px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};
