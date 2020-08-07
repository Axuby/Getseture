import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart],(cart)=> {
    return cart.cartItems 
    }  )


export const  selectCartHidden  = createSelector(
    [selectCart],cart => cart.hidden
) 


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    
    // function(cartItems) {
    //     let sum=0;
    //     cartItems.forEach(cartItem => {
    //       sum += cartItem.quantity;
    //     });
    //     return sum;
    //   }
    
    cartItems =>{
        console.log(cartItems)
     cartItems.payload.reduce((accumulatedQuantity,cartItem)=>
         accumulatedQuantity + cartItem.quantity,0);
    }
)

// const add = (num)=> {
//     let i = 0;
// return num.map()
// }

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => { 
        cartItems.reduce((accumulatedQuantity,cartItem) =>{
        return  accumulatedQuantity + cartItem.quantity * cartItem.price
       },0);
    }
)