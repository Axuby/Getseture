import React from 'react';
import { connect } from "react-redux";
import './Cart.scss'

const CartPage = ({}) => {
  return (
    <div className='cart-container'>
    </div>
  )
}

const mapStateToProps = ({cart})=> ({
    setCart:cart
})
export default  connect(mapStateToProps)(CartPage)
