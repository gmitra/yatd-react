import React from 'react';

function ToDoItem({ data, onToggle, ...props }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    onToggle(data.id);
  };

  return <li><a href="/" onClick={handleOnClick}>{(data.status === 'COMPLETE') ? 'O' : 'X'} {data.description}</a></li>;
}

export default ToDoItem;