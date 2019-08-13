// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList= ({todoList, completedTask}) => {
  console.log('props', todoList, completedTask)


  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">



      {todoList.map(item => (
        <Todo key={item.id} todo={item} completedTask={completedTask}/>
      ))}

    </div>
  );
};

export default TodoList;
