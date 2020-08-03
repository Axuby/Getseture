import React from 'react';
import { connect } from "react-redux";
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss'


const CartDropdown = () => {
  return (
    <div  className='cart-dropdown'>
        <div className="cart-items">
      <CustomButton inverted >GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}

export default connect()(CartDropdown)
