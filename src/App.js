import React from 'react';
import Layout from './components/Layout';

function Left(props) {
  return 'Left';
}

function Right(props) {
  return 'Right';
}

function App() {
  return (
    <Layout left={<Left />} right={<Right />} />
  );
}

export default App;
