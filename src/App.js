import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("multiple");
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = async () => {
    try{
      const response = await fetch("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type="  + type)
      const data = await response.json();
      setQuestions(data);
      console.log(data);
      console.log("question - " + data.results[currentQuestion].question + " answer - " + data.results[currentQuestion].correct_answer);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <p>App goes here.</p>
      <p>Sample API URL: https://opentdb.com/api.php?amount={amount}&category={category}&difficulty={difficulty}&type={type}</p>
      <button onClick={handleClick}>Get Trivia Questions</button>
      <div>
        Question # {currentQuestion + 1}
        <br></br>
        {/* Category: {questions.results.currentQuestion.category} */}
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
