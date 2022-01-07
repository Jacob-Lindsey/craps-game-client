import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StateProvider } from './store/StateProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);