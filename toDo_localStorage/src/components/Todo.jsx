import React, { useState, useEffect } from "react";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";

function Todo() {
  const [tasks, settasks] = useState(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setnewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(e) {
    setnewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      if (tasks.includes(newTask)) {
        alert("Task already exists!");
        setnewTask("");
      } else {
        settasks([...tasks, newTask]);
        setnewTask("");
      }
    } else {
      alert("Please enter task first!");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((element, i) => i !== index);
    settasks(updatedTask);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      settasks(updatedTask);
    }
  }

  function moveDown(index) {
    if(index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      settasks(updatedTask);
    }
  }

  return (
    <div className="mx-auto px-4 py-8 w-full min-h-screen bg-zinc-900 flex flex-col items-center">
      <h1 className="text-4xl md:text-7xl font-bold text-stone-200 py-6 sm:py-10 mb-6 sm:mb-12">
        To-Do App
      </h1>

      <div className="w-full max-w-md px-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          onChange={handleChange}
          type="text"
          value={newTask}
          placeholder="Enter the Task"
          className="flex-1 min-h-[50px] px-4 text-stone-400 border-2 border-stone-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={addTask}
          className="h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg px-4 sm:px-6 transition-colors duration-200"
        >
          Add Task
        </button>
      </div>

      <div className="w-full max-w-md px-4 mt-8 space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-zinc-700 rounded-lg gap-2"
          >
            <span className="text-stone-200">{task}</span>
            <div className="w-1/2">

              
            </div>
            <button
              className="text-green-500 hover:text-white cursor-pointer m-1"
              onClick={() => moveUp(index)}
            >
              <CiSquareChevUp className="text-5xl"/>
            </button>
            <button
              className="text-amber-300 hover:text-white cursor-pointer m-1"
              onClick={() => moveDown(index)}
            >
              <CiSquareChevDown className="text-5xl"/>
            </button>
            <button
              className="text-red-500 text- font-semibold  rounded-md hover:text-white cursor-pointer m-1"
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
