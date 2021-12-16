import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <React.StrictMode >
      <App />
    </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);


