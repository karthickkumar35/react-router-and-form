import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Task1 from './components/task1'
// import FunctionLifecycle from './components/functionLifecycle';
import Routing from './components/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Task1 />
    <FunctionLifecycle /> */}
    <Routing />
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
