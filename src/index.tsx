import 'core-js/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import 'regenerator-runtime/runtime';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'moment/locale/ja';
import moment from 'moment';
import GlobalStyle from './GlobalStyle';
import App from './App';
import * as serviceWorker from './serviceWorker';

moment.locale('ja');

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
