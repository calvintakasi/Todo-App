import Header from "./components/Header";
import AddTodo from "./components/addTodo";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const todoItems = [
    {
      name: "Go to College",
      date: "12/4/3322",
    },
    {
      name: "buy milk",
      date: "12/4/2025",
    },
  ];
  return (
    <>
      <Header></Header>
      <AddTodo></AddTodo>
      <TodoList todoItems={todoItems}></TodoList>
      <Footer></Footer>
    </>
  );
}

export default App;
