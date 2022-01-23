import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App aa="<h1>Template</h1>"/>
  </React.StrictMode>,
  document.getElementById('root')
);
