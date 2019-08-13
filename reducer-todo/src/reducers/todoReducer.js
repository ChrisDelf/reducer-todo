// Need to export 2 things - initialState, and the reducer function

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      const toggleState = [...state];
      const foundItem = toggleState.find(element => {
        return element.id === action.payload;
      });
      foundItem.completed = !foundItem.completed;
      return [...state];

    case 'ADD_TODO':
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];

    case 'CLEAR_TODO':

      return state.filter(todo => !todo.completed)

  }

  return state;
};

//
//  localStorage.setItem(
//       'Todo',
//     JSON.stringify(this.state.todoList.filter(item => !item.completed)
//     ));
//
