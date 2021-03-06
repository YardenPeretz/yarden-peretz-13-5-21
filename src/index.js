import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Switch, Link, withRouter, BrowserRouter } from 'react-router-dom';

//const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//setInterval(function(){console.log(store.getState());},5000)


ReactDOM.render(

    <Provider store={store}>
      
        <App />
     
    </Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
