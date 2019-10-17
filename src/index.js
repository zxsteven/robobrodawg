import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';

import App from './containers/App';
import store from './redux/stores/store'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));


serviceWorker.unregister();
