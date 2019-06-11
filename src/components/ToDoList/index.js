import React, { useContext } from 'react';
import { ToDoContext } from './ToDoContext';
import ToDoItem from './ToDoItem';

function ToDoList({ ...props }) {
  const [state, actions] = useContext(ToDoContext);

  const todos = state.items.map((item) => {
    return <ToDoItem key={item.id} data={item} onToggle={actions.toggleStatus} />;
  });

  return (
    <React.Fragment>
      <h3>{state.listName}</h3>
      <ul>
        {todos}
      </ul>
    </React.Fragment>
  );
}

export default ToDoList;