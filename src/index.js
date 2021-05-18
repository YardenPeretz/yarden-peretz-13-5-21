import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

//import { createStore } from 'redux';
//import allReducers from './reducers/index'
import store from './store'
import { Provider } from 'react-redux'
import search from './components/Search';
import axios from "axios";
import { BrowserRouter as Router, Switch, Link, withRouter } from 'react-router-dom';

//const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//setInterval(function(){console.log(store.getState());},5000)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
