import React from "react";

const TodoItem = item => {
  const key = item.item.id;
  return (
    <li key={key} className={`TodoItem ${item.item.done ? "done" : ""}`}>
      <span className="text" onClick={() => item.onToggle(key)}>
        {item.item.text}
      </span>
      <span className="remove" onClick={() => item.removeTodo(key)}>
        (x)
      </span>
    </li>
  );
};

export default TodoItem;
