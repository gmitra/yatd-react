import React, { useState } from 'react';

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const toDoInfo = {
    listName: 'My To Do',
    items: [{
      description: 'take out garbage',
      id: 0,
      status: 'COMPLETE'
    }, {
      description: 'wash car',
      id: 1,
      status: 'INCOMPLETE'
    },
    {
      description: 'buy milk',
      id: 2,
      status: 'INCOMPLETE'
    }],
    setListName: (name) => {
      setState({ listName: name });
    },
    toggleStatus: (state, id) => {
      const updated = state.items.slice();
      const item = updated.find(todo => id === todo.id);
      if (item.status === 'COMPLETE') {
        item.status = 'INCOMPLETE';
      }
      else {
        item.status = 'COMPLETE';
      }
      setState({ ...toDoInfo, items: updated });
    }
  };

  const [state, setState] = useState(toDoInfo);

  return (
    <ToDoContext.Provider value={{ state: state, setState: setState }}>
      {props.children}
    </ToDoContext.Provider>
  );
}
export { ToDoContext, ToDoProvider };