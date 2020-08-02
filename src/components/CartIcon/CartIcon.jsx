import React from 'react';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import './CartIcon.scss'

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className='cart-icon'>
        <ShoppingIcon onClick={toggleCartHidden} className='shopping-icon'/>
            <span className="item-count">0</span>
      
    </div>
  )
}
const mapDispatchToProps = (dispatch)=> ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default  connect(null, mapDispatchToProps)(CartIcon)
