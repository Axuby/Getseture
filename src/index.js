import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch} from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
import App from './App';

import store from './Redux/store'

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<Switch>
    <App />
</Switch>
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
