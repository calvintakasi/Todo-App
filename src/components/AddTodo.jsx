import { useState } from "react";

function AddTodo({ handleClick }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  function handleNameChange(e) {
    setTodoName(e.target.value);
  }

  function handleDateChange(e) {
    setTodoDate(e.target.value);
  }
  const handleAddButton = (e) => {
    e.preventDefault();
    handleClick(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="mt-11">
      <form className=" flex flex-wrap justify-center items-center gap-9">
        <input
          type="text"
          name="todo"
          placeholder="What need to be done?"
          className=" w-64 px-4 py-2 border border-rounded-300 rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleNameChange}
          value={todoName}
        />

        <input
          type="date"
          name="date"
          className=" w-48 px-4 py-2 border border-rounded-300 rounded-lg shadow-sm bfocus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleDateChange}
          value={todoDate}
        />

        <button
          className="relative inline-flex w-30 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={handleAddButton}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Add Task
          </span>
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
