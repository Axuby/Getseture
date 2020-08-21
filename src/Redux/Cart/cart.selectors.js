import { createSelector } from "reselect";

const selectCart = (state) => {
   return  state.cart
};
export const  selectCartHidden  = createSelector(
    [selectCart],cart => cart.hidden
) 

export const selectCartItems = createSelector(
    [selectCart],(cart)=> {
    return cart.cartItems 
    }  
)


// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems => {
//         console.log(cartItems)
//     return cartItems.reduce((accumulatedQuantity,cartItem)=>
//  {  
//     return accumulatedQuantity + cartItem.quantity },0);
//     }
// )

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => {
       return  cartItems.reduce((accumulatedQuantity,cartItem) =>{
           debugger
        return  accumulatedQuantity + cartItem.quantity * cartItem.price
       },0);
    }
)