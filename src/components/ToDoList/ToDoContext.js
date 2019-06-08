import React from 'react';

const ToDoContext = React.createContext([{
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
}]);

const toggleToDoStatus = (todos, id) => {
  const updated = todos.slice();
  const item = updated.find(todo => id === todo.id);
  if (item.status === 'COMPLETE') {
    item.status = 'INCOMPLETE';
  }
  else {
    item.status = 'COMPLETE';
  }
  return updated;
}

export { ToDoContext, toggleToDoStatus };