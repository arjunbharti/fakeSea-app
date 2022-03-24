import { createContext, useContext, useReducer } from 'react';
import { wishlistReducer } from '../reducers/wishlist-reducer';

const WishlistContext = createContext(null);
const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
        wishlist: []
    });
    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { useWishlist, WishlistProvider };