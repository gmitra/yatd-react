import React from 'react';

function AddToDo({ ...props }) {
  return (
    <div className="add-to-do">
      <input type="text" /> <button type="button">Add</button>
    </div>
  );
}

export default AddToDo;