function TodoItems({ todoName, todoDate }) {
  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-amber-100 card card-side bg-base-100 shadow-sm flex w-3xl h-14 mt-10 mb  border-2 justify-around p-5 rounded-2xl text-lg items-center">
          <div className="name font-semibold">{todoName}</div>
          <div className="date text-gray-600">{todoDate}</div>
          <button className="relative inline-flex w-25 h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fca5a5_0%,#b91c1c_50%,#fca5a5_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Delete
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
