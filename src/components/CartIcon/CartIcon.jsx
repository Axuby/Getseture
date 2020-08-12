import React,{useContext} from 'react';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import './CartIcon.scss'
import { CartContext } from "../../provider/cart/Cart.provider";

const CartIcon = ({itemCount}) => {
  const {toggleHidden,cartItemsCount} = useContext(CartContext)
  console.log(toggleHidden);
  console.log(itemCount);
  return (
    <div className='cart-icon' onClick={()=>toggleHidden} >
        <ShoppingIcon className='shopping-icon'/>
           <span className="item-count">{cartItemsCount}</span>
      
    </div>
  )
}
// const mapDispatchToProps = (dispatch)=> 
// { 
//   debugger
//   return {
//     toggleCartHidden:() => dispatch(toggleCartHidden())
// }
// }
// const mapStateToProps = state => {
//   debugger
//   return {  itemCount :selectCartItemsCount(state)}
// }

export default  (CartIcon)
