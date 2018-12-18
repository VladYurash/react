import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <App />
    <Header />
  </div>,
  document.getElementById('root'));



serviceWorker.unregister();
