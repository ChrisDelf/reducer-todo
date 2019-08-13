import React from 'react';



const ClearTodo = ({clearTodo}) => {
  return (
    <div>
      <button className="clear-btn" onClick={clearTodo}>
        Clear  Completed Todos
      </button>
    </div>
  );
};

export default ClearTodo;
