import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;
