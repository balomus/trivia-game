import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Builder from './features/builder/Builder';
import Question from './features/question/Question';

import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Correct from './routes/Correct';
import Incorrect from './routes/Incorrect';
import Done from './routes/Done';


function App() {

  return (
    <HashRouter>
      <div className="App wrapper">
        {/* <nav>
          <Link to="/">Generate new questions</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Builder />}/>
          <Route path="question" element={<Question />} />
          <Route path="correct" element={<Correct />} />
          <Route path="incorrect" element={<Incorrect />} />
          <Route path="done" element={<Done />} />
        </Routes>
        <Outlet />
      </div>
    </HashRouter>
  );

  // return (
  //   <div className="App">
  //     <nav>
  //       <Link to="/builder">Generate new questions</Link>
  //        {/* | {" "}
  //       <Link to="/question">Question</Link> */}
  //     </nav>
  //     <Builder />
  //     <Question />
      
  //     <Outlet />
  //   </div>
  // );
}

export default App;