function TodoItems({ todoName, todoDate, id, handleDelete }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="  card card-side bg-base-100 shadow-sm flex w-3xl h-14 mt-10 mb  border-2 justify-around p-5 rounded-2xl text-lg items-center">
          <input id="checkbox1" type="checkbox" class="hidden peer" />
          <label
            for="checkbox1"
            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-green-500 rounded-md overflow-hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-full fill-green-500"
              viewBox="0 0 520 520"
            >
              <path
                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                data-name="7-Check"
                data-original="#000000"
              />
            </svg>
          </label>

          <div className="name font-semibold text-base sm:text-sm">
            {todoName}
          </div>
          <div className="date text-gray-600 text-base sm:hidden md:block">
            {todoDate}
          </div>
          <button
            className="relative inline-flex w-25 h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => handleDelete(id)}
          >
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
