import React, { useState } from "react";

function Todo() {
  const [tasks, settasks] = useState(["Buy Apple", "Get Notebook"]);
  const [newTask, setnewTask] = useState("");

  function handleChange(e) {
    setnewTask(e.target.value);
  }

  function addTask() {
    settasks([...tasks, newTask]);
    setnewTask("");
  }

  function deleteTask() {}

  return (
    <div className="mx-auto px-4 py-8 w-full min-h-screen bg-gray-800 flex flex-col items-center">
      <h1 className="text-4xl md:text-7xl font-bold text-stone-200 py-6 sm:py-10 mb-6 sm:mb-12">
        To-Do App
      </h1>

      <div className="w-full max-w-md px-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          onChange={handleChange}
          type="text"
          value={newTask}
          placeholder="Enter the Task"
          className="flex-1 min-h-[50px] px-4 text-stone-400 border-2 border-stone-400 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={addTask}
          className="h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg px-4 sm:px-6 transition-colors duration-200"
        >
          Add Task
        </button>
      </div>

      <div className="w-full max-w-md px-4 mt-8 space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
          >
            <span className="text-stone-200">{task}</span>
            <button
              className="text-red-400 hover:text-red-300"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
