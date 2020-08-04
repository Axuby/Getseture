import React from 'react';
import { connect } from "react-redux";
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';
import { withRouter } from 'react-router-dom';


const CartDropdown = ({cartItems,history }) => {
  return (
    <div  className='cart-dropdown'>
        <div className="cart-items">
{
    cartItems.length ? cartItems.map(cartItem =>
      <CartItem  key={cartItem.id} item={cartItem}/>
      ): 
      <span className="empty-message"> Your cart is empty </span>
}

      <CustomButton onClick={()=> history.push('/checkout')} inverted >GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}


const mapStateToProps = (state)=> ({
  cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
