import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Builder from './features/builder/Builder';
import Question from './features/question/Question';

function App() {

  return (
    <div className="App">
      <Builder />
      <Question />
    </div>
  );
}

export default App;
