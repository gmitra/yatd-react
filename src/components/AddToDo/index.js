import React, { useState, useContext } from 'react';
import { ToDoContext } from '../ToDoList/ToDoContext';

function AddToDo({ ...props }) {
  const context = useContext(ToDoContext);
  const [state, setState] = useState({
    description: 'test'
  });

  const addToDoItem = () => {
    const updated = context.state.items.slice();
    updated.push({
      id: (new Date()).getTime(),
      description: state.description,
      status: 'INCOMPLETE'
    });
    context.setState({ ...context.state, items: updated });
  };

  const changeListName = () => {
    context.setState({ ...context.state, listName: state.description });
  }

  const onChange = (e) => {
    setState({ description: e.target.value });
  };

  return (
    <div className="add-to-do">
      <input type="text" value={state.description} onChange={onChange} />
      <button type="button" onClick={addToDoItem}>Add</button>
      <button type="button" onClick={changeListName}>Change Name</button>
    </div>
  );
}

export default AddToDo;