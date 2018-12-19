import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Header />
  </div>,
  document.getElementById('root'));


serviceWorker.unregister();
