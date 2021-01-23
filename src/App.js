import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";
function App() {
  const taskobj = useSelector((state) => state.todos.data);
  return (
    <div className='App'>
      <h1>Redux - TodoList, Total tasks remained: {taskobj.length}</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
