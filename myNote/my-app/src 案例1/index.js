import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';//用于记录界面性能

ReactDOM.render(
  /* React.StrictMode校验App组件中代码是否规范（例如还在使用废弃的api等） */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
