import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import './App.css';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "방 청소하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "기타 연습하기",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData);
  const nextId = useRef(mockData.length);

  const onCreate = (content) => {
    const newTodo = {
      id: nextId.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 
  const ontodoDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  const doneCount = todos.filter(todo => todo.isDone).length;

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onDelete={onDelete} ontodoDone={ontodoDone}/>    
      <div className='done'>완료된 항목: {doneCount}</div>
    </div>
  );
}

export default App;
