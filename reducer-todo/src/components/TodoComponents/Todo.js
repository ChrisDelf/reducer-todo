import React, { useState, useReducer } from 'react';

const Todo = ({ todo, completedTask }) => {
  console.log('In todo', todo);
  return (
    <div
      className={`item${todo.completed ? ' completed' : ''}`}
      onClick={() => completedTask(todo.id)}
    >
      <p>{todo.item}</p>
    </div>
  );
};

export default Todo;
