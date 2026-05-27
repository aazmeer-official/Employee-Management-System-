import React, { useState } from "react";
function CreateTask() {  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Low");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const taskData = {
      taskTitle,
      taskDate,
      assignTo,
      category,
      priority,
      description,
    };

    console.log(taskData);

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setPriority("Low");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] p-10 text-white">


      <div className="mt-10 rounded-2xl bg-[#222222] p-8 shadow-2xl shadow-black/40">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-500 text-xl">
            +
          </div>

          <div>
            <h1 className="text-3xl font-bold">Create Task</h1>
            <p className="mt-1 text-sm text-zinc-400">
              Create and assign tasks to your employees
            </p>
          </div>
        </div>

        <form onSubmit={submitHandler} className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full rounded-lg border border-zinc-700 bg-[#2E2E2E] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full rounded-lg border border-zinc-700 bg-[#2E2E2E] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full rounded-lg border border-zinc-700 bg-[#2E2E2E] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Development, etc..."
              className="w-full rounded-lg border border-zinc-700 bg-[#2E2E2E] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-[#2E2E2E] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              placeholder="Detailed description of task..."
              className="w-full resize-none rounded-lg border border-zinc-700 bg-[#2E2E2E] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
            ></textarea>
          </div>

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-red-500 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/30 active:scale-95"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateTask