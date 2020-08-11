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
        removeItemFromCartq(cartItems,cartItemToRemove)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity-1}
        : cartItem
        )
  }


// export const reduceItemFromCart = (cartItems,cartItemToReduce) =>{

//   if (cartItems.length) {
//     const existingCartItem = cartItems.find(
//         cartItem => cartItem.id === cartItemToReduce.id)

//     if (existingCartItem.length === 1) {
//         removeItemFromCart(cartItems,cartItemToReduce)
//     }

//     return cartItems.map(cartItem =>
//         cartItem.id === cartItemToReduce.id
//         ? { ...cartItem, quantity: cartItem.quantity-1}
//         : cartItem
//         )
//   }
// }

