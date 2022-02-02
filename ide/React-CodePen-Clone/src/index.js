import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ModuleList from './components/ModuleList';
import OnlineIDE from './components/OnlineIDE';

ReactDOM.render(
  <React.StrictMode>
    <OnlineIDE />
  </React.StrictMode>,
  document.getElementById('root')
);
