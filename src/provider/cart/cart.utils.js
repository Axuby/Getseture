export const addItemToCart =  (cartItems,cartItemToAdd) => {
        console.log(cartItems)
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id)

        if (existingCartItem) {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity+1}
                : cartItem
                )
        }
        return [...cartItems,{...cartItemToAdd,quantity:1}]
}


export const removeItemFromCartq = (cartItems,cartItemToRemove) =>{
     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}



export const removeItemFromCart = (cartItems,cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity-1}
        : cartItem
        )
  }


export const filterItemsFromCart = (cartItems,item)=> cartItems.filter(
    cartItem => cartItem.id !== item.id )



export const getItemsCount = cartItems => {
        return cartItems.reduce((accumulatedQuantity,cartItem)=>
      accumulatedQuantity + cartItem.quantity,0);
    }
        


