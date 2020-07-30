import React from 'react';
import Homepage from "./pages/Homepage/homepage.components";
import {  Route,Switch} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import './App.css';

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
      <Homepage/>
    </div>
  );
} 

export default App;
