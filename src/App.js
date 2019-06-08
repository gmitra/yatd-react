import React from 'react';
import MainLayout from './layout/MainLayout';
import Sidebar from './layout/Sidebar';
import ToDoListForm from './layout/ToDoListForm';

function App() {
  return (
    <MainLayout left={<Sidebar />} right={<ToDoListForm />} />
  );
}

export default App;
