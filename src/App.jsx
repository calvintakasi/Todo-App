import Header from "./components/Header";
import AddTodo from "./components/addTodo";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  // const todoItems = ;

  const [todoItems, setodoItems] = useState([
    {
      id: 1,
      name: "Go to College",
      date: "12/4/3322",
    },
    {
      id: 2,
      name: "buy milk",
      date: "12/4/2025",
    },
  ]);

  function handleClick(todoName, todoDate) {
    console.log(`${todoName}  ${todoDate}`);
  }
  return (
    <>
      <Header></Header>
      <AddTodo handleClick={handleClick}></AddTodo>
      <TodoList todoItems={todoItems}></TodoList>
      <Footer></Footer>
    </>
  );
}

export default App;
