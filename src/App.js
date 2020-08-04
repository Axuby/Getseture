import React from 'react';
import { connect } from "react-redux";
import Homepage from "./pages/Homepage/Homepage.components";
import {  Route,Switch, Redirect} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp';
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils"
import './App.css';
import { setCurrentUser } from './Redux/User/user.actions';
import { selectCurrentUser } from './Redux/User/user.selectors';
import Checkout from './pages/Checkout/Checkout';

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
            setCurrentUser({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            }
            //,()=> {console.log(this.state)}
            )

        } )
     }
     setCurrentUser(userAuth)//after logging out userAuth = null
     
  

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
        <Route exact path="/signIn" 
        render={() => this.props.currentUser 
          ? <Redirect to="/"/> 
          : (<SignInSignUp/>) }/>
          <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
}
} 
 //App doesnit need the current user again for the header , you get? 
// const mapStateToProps = ({user})=> ({
//   currentUser:user.currentUser
// })

const mapStateToProps = (state)=> ({
  currentUser:selectCurrentUser(state)
})
const mapDispatchToProps = (dispatch)=> ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
