import React from 'react';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import './CartIcon.scss'
import { selectCartItemsCount } from '../../Redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount}) => {
  console.log(itemCount);
  return (
    <div className='cart-icon' onClick={toggleCartHidden} >
        <ShoppingIcon className='shopping-icon'/>
           <span className="item-count">{itemCount}</span>
      
    </div>
  )
}
const mapDispatchToProps = (dispatch)=> 
{ 
  debugger
  return {
    toggleCartHidden:() => dispatch(toggleCartHidden())
}
}
const mapStateToProps = state => {
  debugger
  return {  itemCount :selectCartItemsCount(state)}
}

export default  connect(mapStateToProps, mapDispatchToProps)(CartIcon)
