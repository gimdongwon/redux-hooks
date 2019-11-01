import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTodo } from "../modules/todos";
import "./TodoContainer.css";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [value, setValue] = useState("");

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(createTodo(value));
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="typing todo" value={value} onChange={onChange} />
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default TodoContainer;
