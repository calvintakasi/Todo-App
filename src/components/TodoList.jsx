import TodoItems from "./TodoItems";

function TodoList({ todoItems, handleDelete }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItems
          key={item.id}
          id={item.id}
          todoName={item.name}
          todoDate={item.date}
          handleDelete={handleDelete}
        ></TodoItems>
      ))}
    </>
  );
}

export default TodoList;
