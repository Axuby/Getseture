import React, { useState,useEffect,createContext  } from "react";
import { addItemToCart,removeItemFromCart, removeItemFromCartq ,getItemsCount} from "./cart.utils";
import CartItem from "../../components/CartItem/CartItem";


     export const CartContext = createContext({
    hidden:true,
    toggleHidden:()=> {},
    cartItems:[],
    addItem:()=> {},
    removeItem:()=> {},
    clearItem:()=>{},
    cartTotal:()=>{},
    cartItemsCount:0 
})

const CartProvider =({children}) => {
                    const [hidden, setHidden] = useState(true)
                    const toggleHidden = () => setHidden(!hidden)
                    const [cartItems, setCartItems] = useState([])
                    const [cartItemsCount, setCartItemsCount] = useState(0)
                    const clearItemFromCart = item => setCartItems(removeItemFromCartq(cartItems,item))
                    const addItem = (item)=> setCartItems(addItemToCart(cartItems,item))
                    const removeItem = item => setCartItems(removeItemFromCart(cartItems,item))
                    const cartTotal = (cartItems) => {}

                // const cartItemsCount = item => 


                useEffect(() => {
                    setCartItemsCount(getItemsCount(cartItems))
                
                }, [cartItemsCount])

                    return(
                        <CartContext.Provider value={{
                            toggleHidden,
                            hidden,
                            addItem,
                            removeItem,
                            clearItemFromCart,
                            cartItems,
                            cartTotal,
                            cartItemsCount
                        }}>
                            {children}
                        </CartContext.Provider>
                    )
}

export default CartProvider;