import React from 'react';
import { connect } from "react-redux";
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';


const CartDropdown = ({cartItems }) => {
  return (
    <div  className='cart-dropdown'>
        <div className="cart-items">
{
    cartItems.map(cartItem =>
    <CartItem  key={cartItem.id} item={cartItem}/>
    )
}

      <CustomButton inverted >GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}


const mapStateToProps = (state)=> ({
  cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
