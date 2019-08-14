import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import './components/TodoComponents/Todo.css';

import { initialState, todoReducer } from './reducers/todoReducer.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import { init } from 'events';
import ClearTodo from './components/TodoComponents/ClearTodo.js';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

// const historyList =  JSON.parse(localStorage.getItem('Todo') || '')
// const conCatList = todoList.concat(historyList);

const App = () => {
  // using dispatch
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const completedTask = id => {
    console.log('ID', id);
    dispatch({ type: 'TOGGLE_ITEM', payload: id });
  };

  const addTodo = text => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const clearTodo = () => {
    dispatch({ type: 'CLEAR_TODO'});
  };

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <div>
        <TodoList todoList={state} completedTask={completedTask} />
      </div>
      <TodoForm addTodo={addTodo} />
      <ClearTodo clearTodo={clearTodo} />
    </div>
  );
};

export default App;
