import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react'
import { cartReducer } from '../reducers/cart-reducer';
import { useAuth } from './auth-context';
const CartContext = createContext(null);
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const { userInfo } = useAuth();
    const [cartItemsState, cartItemsDispatch] = useReducer(cartReducer, {
        cartProducts: [],
        totalProducts: 0,
        cartPrice: 0,
        updateCart: 0,
        detailedCartData: [],
    });

    useEffect(() => {
        if(userInfo.userStatus) {
            const getCartData = async() => {
                try {
                    const data = await axios.get('/api/user/cart', {
                        headers: { authorization: userInfo.authToken }
                    })
                    cartItemsDispatch({ type: "add-to-cart", payload: data.data.cart })
                } catch (error) {
                    console.log(error.message);
                }
            }
            getCartData();
        }
    }, [cartItemsState.updateCart])

    return (
        <CartContext.Provider value={{ cartItemsState, cartItemsDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider };