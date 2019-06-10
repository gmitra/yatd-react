import React, { useContext, useState } from 'react';
import { ToDoContext } from './ToDoContext';
import ToDoItem from './ToDoItem';

function ToDoList({ ...props }) {
  const context = useContext(ToDoContext);
  //const [items, setItems] = useState(context);
  const onToggle = (id) => {
    context.state.toggleStatus(context.state, id);
  };

  const todos = context.state.items.map((item) => {
    return <ToDoItem key={item.id} data={item} onToggle={onToggle} />;
  });

  return (
    <React.Fragment>
      <h3>{context.state.listName}</h3>
      <ul>
        {todos}
      </ul>
    </React.Fragment>
  );
}

export default ToDoList;