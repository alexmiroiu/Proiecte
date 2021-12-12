import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode >
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


