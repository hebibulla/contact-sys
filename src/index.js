import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import * as serviceWorker from './serviceWorker';
import Myrouter from './router';

ReactDOM.render(
  <React.StrictMode>
      <Myrouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
