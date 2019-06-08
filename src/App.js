import React from 'react';
import MainLayout from './layout/MainLayout';
import Sidebar from './layout/Sidebar';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <MainLayout left={<Sidebar />} right={<ToDoList />} />
  );
}

export default App;
