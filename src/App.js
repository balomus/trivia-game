import Builder from './features/builder/Builder';
import Question from './features/question/Question';

import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import Correct from './routes/Correct';
import Incorrect from './routes/Incorrect';
import Done from './routes/Done';


function App() {

  return (
    <HashRouter>
      <div className="App wrapper">
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
}

export default App;