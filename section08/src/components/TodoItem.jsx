import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, ontodoDone }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={todo.isDone} onChange={() => ontodoDone(todo.id)} />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleString()}</div>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;

