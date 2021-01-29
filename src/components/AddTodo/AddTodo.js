import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddTodo;
