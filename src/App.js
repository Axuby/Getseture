import React,{ useContext} from 'react';
import { connect } from "react-redux";
import Homepage from "./pages/Homepage/Homepage";
import {  Route,Switch, Redirect} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp';
import { auth, createUserProfileDocument,addCollectionAndDocument } from "./firebase/Firebase.utils"
import './App.css';
import { setCurrentUser } from './Redux/User/user.actions';
import { selectCurrentUser } from './Redux/User/user.selectors';
import Checkout from './pages/Checkout/Checkout';
import { createStructuredSelector } from 'reselect';
import CurrentUserContext from './context/currentUser/CurrentUser.context';
import {selectCollectionPreview} from './Redux/Shop/shop.selectors'


class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     currentUser:null
  //   }
  // }
  unsubscribeFromAuth = null;

    //const {setCurrentUser,collectionsArray} = this.props

    componentDidMount(){
      //const {} = this.props
  const {setCurrentUser,collectionArray} = this.props
  console.log(collectionArray)
     // const { currentUser } = this.state;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

            userRef.onSnapshot(snapShot =>{
               // this.setState({
                 setCurrentUser({
                  currentUser:{
                    id:snapShot.id,
                    ...snapShot.data()
                  }
                })

            } )
        }
        setCurrentUser(userAuth)
        //this.setState({currentUser:userAuth})//after logging out userAuth = null
      addCollectionAndDocument("collectionDb",collectionArray.map(({title,items})=> ({title,items})))
        

      })
    }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div> 
      <CurrentUserContext.Provider value={this.props.currentUser}>
      <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signIn" 
        render={() => this.props.currentUser
          //this.state.currentUser 
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

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
 collectionArray:selectCollectionPreview
})
const mapDispatchToProps = (dispatch)=> ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
