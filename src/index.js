import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import './index.css';
import App from './App';

import {store,persistor} from './Redux/store'
import CartProvider from './provider/cart/Cart.provider';

    ReactDOM.render(
     <CartProvider > 
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                    <PersistGate persistor={persistor}>
                      <App />
                    </PersistGate>
                  </Switch>
              </BrowserRouter>
        </Provider>
     </CartProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
