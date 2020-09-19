// By Shreyas: This File is an entry point to React application

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; // This is for PWA, Offline content

ReactDOM.render(
  <React.StrictMode>
    <App /> //This is loading App.js
  </React.StrictMode>,
  document.getElementById('root') //
);


serviceWorker.unregister();
