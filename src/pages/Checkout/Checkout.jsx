import React from 'react';
import './Checkout.scss'
import { connect } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const Checkout = ({cartItems,cartItemsTotal}) => {
  return (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }


        <div className="cartItem-total">
        <span>Total: #{cartItemsTotal}</span>
        </div>
        </div>
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartItemsTotal:selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
