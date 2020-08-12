import React,{useContext} from 'react';
import { connect } from "react-redux";
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/Cart/cart.actions';
import {CartContext} from "../../provider/cart/Cart.provider";


const CartDropdown = ({history}) => {
  const {cartItems,toggleHidden} = useContext(CartContext) 
  console.log(cartItems);
      console.log(history);

  return (
    <div  className='cart-dropdown'>
        <div className="cart-items">
{
    cartItems.length ?
     cartItems.map(cartItem =>
      <CartItem  key={cartItem.id} item={cartItem}/>
      ): 
      <span className="empty-message"> Your cart is empty </span>
}

      <CustomButton onClick={()=>{
        history.push('/checkout')
        toggleHidden()
    }} inverted >GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}


// const mapStateToProps = state => ({
//   cartItems:selectCartItems(state)
// })

export default withRouter((CartDropdown))
