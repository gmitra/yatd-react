import React from 'react';
import MainLayout from './layout/MainLayout';
import Sidebar from './layout/Sidebar';

function Right(props) {
  return 'Right';
}

function App() {
  return (
    <MainLayout left={<Sidebar />} right={<Right />} />
  );
}

export default App;
