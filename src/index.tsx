import 'core-js/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import 'regenerator-runtime/runtime';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import 'moment/locale/ja';
import moment from 'moment';
import GlobalStyle from './GlobalStyle';
import App from './App';
import * as serviceWorker from './serviceWorker';

moment.locale('ja');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
