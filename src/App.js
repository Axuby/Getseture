import React from 'react';
import { connect } from "react-redux";
import Homepage from "./pages/Homepage/Homepage.components";
import {  Route,Switch} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp';
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils"
import './App.css';
import { setCurrentUser } from './Redux/User/user.actions';

class App extends React.Component {
  // constructor(props){
  //   super(props)

  //   this.state ={
  //     currentUser:null
  //   }
  // }


  unsubscribeFromAuth = null;


componentDidMount(){
  const {setCurrentUser} = this.props;
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
   if (userAuth) {
     const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>{
            this.props.setCurrentUser({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            }
            ,()=> {console.log(this.state)}
            )

        } )
     }
     setCurrentUser({
       currentUser:userAuth //after logging out userAuth = null
     })
  

  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div> 
      <Header 
      //currentUser={this.state.currentUser}
      />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signIn" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}
} 
 //App doesnit need the current user again for the header , you get? 

const mapDispatchToProps = (dispatch)=> ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
