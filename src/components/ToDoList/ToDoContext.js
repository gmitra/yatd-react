import React, { useState, useEffect } from 'react';

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const toDoInfo = {
    listName: 'My To Do',
    items: []
  };

  const [state, setState] = useState(toDoInfo);

  useEffect(() => {
    const mockFetch = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
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
            }]
          });
        }, 2000);
      });
    };

    const fetchData = async () => {
      await mockFetch().then((resp) => {
        setState({ ...state, items: resp.items });
      });
    };

    fetchData();
  });

  const toggleStatus = (id) => {
    const updated = state.items.slice();
    const item = updated.find(todo => id === todo.id);
    if (item.status === 'COMPLETE') {
      item.status = 'INCOMPLETE';
    }
    else {
      item.status = 'COMPLETE';
    }
    setState({ ...state, items: updated });
  };

  return (
    <ToDoContext.Provider value={[state, { setState, toggleStatus }]}>
      {props.children}
    </ToDoContext.Provider>
  );
}
export { ToDoContext, ToDoProvider };