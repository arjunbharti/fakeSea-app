import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { wishlistReducer } from '../reducers/wishlist-reducer';
import { useAuth } from './auth-context';

const WishlistContext = createContext(null);
const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
    const { userInfo } = useAuth();
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
        wishlist: [],
        productCount: 0,
    });

    useEffect(() => {
        if(userInfo.userStatus) {
            const getWishlistProducts = async () => {
                try {
                    const data = await axios.get("/api/user/wishlist", {
                        headers: {
                            authorization: userInfo.authToken,
                        }
                    });
                    wishlistDispatch({ type: "add-to-wishlist", payload: data.data.wishlist });
                } catch (error) {
                    console.log(error.message);
                }
            }
            getWishlistProducts();
        }
    }, [wishlistState.productCount]);

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { useWishlist, WishlistProvider };