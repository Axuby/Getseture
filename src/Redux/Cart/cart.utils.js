export const addItemToCart = (cartItems,cartItemToAdd) => {

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


export const removeItemFromCart = (cartItems,cartItemToRemove) =>{

     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
     

}

export const reduceItemFromCart = (cartItems,cartItemToReduce) =>{

  if (cartItems.length) {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToReduce.id)
        
    if (existingCartItem.length === 1) {
        removeItemFromCart(cartItems,cartItemToReduce)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity-1}
        : cartItem
        )
  }
}

