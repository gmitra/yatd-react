import React, { useReducer, useEffect } from 'react';

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const toDoInfo = {
    listName: 'My To Do',
    items: []
  };

  const reducer = (state, action) => {
    let items;
    switch (action.type) {
      case 'SET_ITEMS':
        return ({ ...state, items: action.payload.items });
      case 'SET_NAME':
        return ({ ...state, listName: action.payload.name });
      case 'TOGGLE_STATUS':
        items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.status = (item.status === 'COMPLETE') ? 'INCOMPLETE' : 'COMPLETE';
          }
          return item;
        });
        return ({ ...state, items: items });
      case 'ADD':
        items = state.items.slice();
        items.push(action.payload);
        return ({ ...state, items: items });
      default:
        throw new Error('Invalid or missing action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, toDoInfo);

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
        dispatch({
          type: 'SET_ITEMS',
          payload: {
            items: resp.items
          }
        });
      });
    };

    fetchData();
  }, []);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
}
export { ToDoContext, ToDoProvider };