import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import  Store  from './store/store'


ReactDOM.render(
  <Provider store={Store}> <BrowserRouter><App /></BrowserRouter></Provider>
    ,
  document.getElementById('app')
);