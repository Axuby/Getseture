import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/Firebase.utils";
import { createStructuredSelector } from "reselect";
import "./Header.scss"
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';
import { selectCurrentUser } from '../../Redux/User/user.selectors';

const Header = ({currentUser,hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/"> 
         <Logo className="logo"/>
       </Link>
       
              <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>

                  {
                    currentUser
                    ? <div className="option" onClick={()=> auth.signOut()}>
                        Sign Out
                    </div>
                    : <Link className="option" to="/signIn">Sign In</Link>
                  }
                    <CartIcon />
                </div>
                {
                    hidden ? null :(<CartDropdown/>)
                }
              
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser:selectCurrentUser(state),
//   hidden:selectCartHidden(state)
  
// }) //gives access to the state === root reducer=== combineReducer


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
  
}) //gives access to the state === root reducer=== combineReducer


export default connect(mapStateToProps)(Header)
