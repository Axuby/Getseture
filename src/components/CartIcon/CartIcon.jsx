import React,{useContext} from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import './CartIcon.scss'
import { CartContext } from "../../provider/cart/Cart.provider";
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount, selectCartHidden } from '../../Redux/Cart/cart.selectors';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart.actions';

const CartIcon = ({cartItemsCount,toggleCartHidden}) => {
 /// const {toggleHidden,cartItemsCount} = useContext(CartContext)
  //console.log(toggleHidden);
  
  return (
    <div className='cart-icon' onClick={()=> toggleCartHidden()} >
        <ShoppingIcon className='shopping-icon'/>
           <span className="item-count">{cartItemsCount}</span>
      
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  toggleCartHidden:dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
 // cartItemsCount:selectCartItemsCount,
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
