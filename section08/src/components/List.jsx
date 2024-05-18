import React from "react";
import TodoItem from "./TodoItem";
import "./List.css";

const List = ({ todos, onDelete, ontodoDone }) => {
  return (
    <div className="List">
      <h4>Todo List ☘️</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} ontodoDone={ontodoDone}/>
        ))}
      </div>
    </div>
  );
}

export default List;
