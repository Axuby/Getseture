import React from 'react';
import { connect } from "react-redux";
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';


const CartDropdown = ({cartItems,history, dispatch }) => {
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
        dispatch(toggleCartHidden())
    }} inverted >GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
