import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/js/material.js';
import './static/css/material.css';

import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import NetworksPage from './views/NetworksPage';


ReactDOM.render((
    <BrowserRouter>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/networks" component={NetworksPage} />
      </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
