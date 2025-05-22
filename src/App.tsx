import React from 'react';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

  return (
    <div className="app">
      <h1>Todo</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
