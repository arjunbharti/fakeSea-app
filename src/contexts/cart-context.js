import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart-reducer';
const CartContext = createContext(null);
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useReducer(cartReducer, {
        cartProducts: [],
    });

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider };