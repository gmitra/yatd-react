import React, { useContext, useState } from 'react';
import { ToDoService } from './ToDoService';
import ToDoItem from './ToDoItem';

function ToDoList({ ...props }) {
  const context = useContext(ToDoService.context);
  const [items, setItems] = useState(context);

  const onToggle = (id) => {
    const updated = ToDoService.toggleStatus(items, id);
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