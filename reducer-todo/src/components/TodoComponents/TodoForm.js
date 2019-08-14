import React, { useState, useReducer } from 'react';


const TodoForm = ({addTodo}) => {
  const [newTodoText, setNewTodoText] = useState('');

  const submitTodoText = event => {
    event.preventDefault();
    addTodo(newTodoText)
  };

  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitTodoText}>
        <input
          type="text"
          value={newTodoText}
          placeholder="Todo...."
          name="item"
          onChange={handleChanges}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default TodoForm;
