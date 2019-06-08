import React, { useContext, useState } from 'react';
import { ToDoContext, toggleToDoStatus } from './ToDoContext';
import ToDoItem from './ToDoItem';

function ToDoList({ ...props }) {
  const context = useContext(ToDoContext);
  const [items, setItems] = useState(context);

  const onToggle = (id) => {
    const updated = toggleToDoStatus(items, id);
    setItems(updated);
  };

  const todos = items.map((item) => {
    return <ToDoItem key={item.id} data={item} onToggle={onToggle} />;
  });

  return (
    <ul>
      {todos}
    </ul>
  );
}

export default ToDoList;