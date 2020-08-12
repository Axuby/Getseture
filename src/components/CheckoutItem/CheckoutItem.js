import React,{useContext} from 'react';
import './CheckoutItem.scss'
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../Redux/Cart/cart.actions';
import { CartContext } from "../../provider/cart/Cart.provider";


const CheckoutItem = ({cartItem}) => {

    const {removeItem,addItem,clearItemFromCart} = useContext(CartContext)
  const {name,price, quantity,imageUrl} = cartItem
  return (
    <div className='checkout'>
      <div className="checkout-item">
        <div className="image-container">
        <img src={imageUrl} alt="item"/>
        </div>
 
        <span className='name'>{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={()=> clearItemFromCart(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addItem(cartItem)}> &#10095;</div>
          </span>
           <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
 clearItemFromCart:item =>dispatch(clearItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)
