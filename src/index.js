import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Builder from './features/builder/Builder';
import Question from './features/question/Question';


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<App />}>
//             <Route path="builder" element={<Builder />} />
//             <Route path="question" element={<Question />} />
//           </Route>
//         </Routes>
//         {/* <App /> */}
//       </HashRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
