import React from 'react';
import './CheckoutItem.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';

const CheckoutItem = ({cartItem :{name,price, quantity,imageUrl}}) => {
  return (
    <div className="checkout-item">
        <div className="image-container">
        <img src={imageUrl} alt="item"/>
        </div>
 
  <span className='name'>{name}</span>
  <span className="quantity">{quantity}</span>
  <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItem:selectCartItems
})

export default connect(mapStateToProps)(CheckoutItem)
