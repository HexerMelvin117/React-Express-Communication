import React from 'react';
import './App.css';
import TestForm from './components/TestForm'
import Alltests from './components/Alltests'
import DeleteForm from './components/DeleteForm'

function App() {
  return (
    <div className="App">
      <TestForm />
      <Alltests />
      <DeleteForm />
    </div>
  );
}

export default App;
