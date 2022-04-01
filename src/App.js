import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Builder from './features/builder/Builder';

function App() {

  return (
    <div className="App">
      <Builder />
    </div>
  );
}

export default App;
