import React,{ useContext} from 'react';
import './Checkout.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import { CartContext } from "../../provider/cart/Cart.provider";


const Checkout = ({cartItems,cartItemsTotal}) => {
   // const {cartItems} = useContext(CartContext)

    console.log(cartItems)
    console.log(cartItemsTotal);;
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
        <div className="cartItem-total">Total: #{cartItemsTotal}</div>
        <div className="test-warning">
            * Please Use the following test credit card for testing
            <br/>
            4242 4242 4242 4242 - expiry date: 01/20 - CVV :123
        </div>
        <StripeButton price={cartItemsTotal}/>
        </div>
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartItemsTotal:selectCartTotal
})
 
export default connect(mapStateToProps)(Checkout)
