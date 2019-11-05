import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createTodoAsync,
  deleteTodoAsync,
  toggleTodoAsync
} from "../modules/todos";
import "./TodoContainer.css";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [value, setValue] = useState("");

  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(createTodoAsync(value));
  };
  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addTodo();
    setValue("");
  };

  const removeTodo = id => {
    dispatch(deleteTodoAsync(id));
  };
  const onToggle = id => {
    dispatch(toggleTodoAsync(id));
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="typing todo" value={value} onChange={onChange} />
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoContainer;
