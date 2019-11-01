import React from "react";
import { deleteTodo, toggleTodo } from "../modules/todos";
import { useDispatch } from "react-redux";
const TodoItem = item => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodo(item.item.id));
  };
  const onToggle = () => {
    dispatch(toggleTodo(item.item.id));
  };
  return (
    <li
      key={item.item.id}
      className={`TodoItem ${item.item.done ? "done" : ""}`}
    >
      <span className="text" onClick={onToggle}>
        {item.item.text}
      </span>
      <span className="remove" onClick={removeTodo}>
        (x)
      </span>
    </li>
  );
};

export default TodoItem;
