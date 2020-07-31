import React from 'react';
import Homepage from "./pages/Homepage/Homepage.components";
import {  Route,Switch} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  return (
    <div> 
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
} 

export default App;
