import TodoItems from "./TodoItems";

function TodoList({ todoItems }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItems
          key={item.id}
          todoName={item.name}
          todoDate={item.date}
        ></TodoItems>
      ))}
    </>
  );
}

export default TodoList;
