import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/js/material.js';
import './static/css/material.css';

import { Provider } from 'react-redux';
import store from './store/index';

import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import NetworksPage from './views/NetworksPage';


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/networks" component={NetworksPage} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
