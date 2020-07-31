import React from 'react';
import Homepage from "./pages/Homepage/Homepage.components";
import {  Route,Switch} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import './App.css';
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp';

function App() {
  return (
    <div> 
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signIn" component={SignInSignUp}/>
      </Switch>
    </div>
  );
} 

export default App;
