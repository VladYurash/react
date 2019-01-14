import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Header from './components/header';
import Acquainted from './components/acquainted';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Header />
    <Acquainted />
  </div>,
  document.getElementById('root'));


serviceWorker.unregister();
