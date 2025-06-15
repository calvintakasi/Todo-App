import Header from "./components/Header";
import AddTodo from "./components/addTodo";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  // const todoItems = ;

  const [todoItems, setodoItems] = useState([]);

  function handleClick(todoName, todoDate) {
    console.log(`${todoName}  ${todoDate}`);

    const newTodoItems = [
      ...todoItems,
      { id: Date.now(), name: todoName, date: todoDate },
    ];

    setodoItems(newTodoItems);
  }
  return (
    <>
      <Header></Header>
      <AddTodo handleClick={handleClick}></AddTodo>

      {todoItems.length === 0 && <Message></Message>}
      <TodoList todoItems={todoItems}></TodoList>
      <Footer></Footer>
    </>
  );
}

export default App;
