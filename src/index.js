import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Title } from './Title';
import { Basic } from './Form';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <App />
    <Basic />
  </React.StrictMode>,
  document.getElementById('root')
);