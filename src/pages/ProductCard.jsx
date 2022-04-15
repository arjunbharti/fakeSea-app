import React from 'react'
import '../styles/product-card.css'
import { useWishlist } from '../contexts/wishlist-context'
import { useCart } from '../contexts/cart-context'
import { useAuth } from '../contexts/auth-context'
import { addProductToWishlist, deleteProductFromWishlist } from '../utilities/wishlist'
import { useNavigate } from 'react-router-dom'
import { addProductToCart, deleteProductFromCart } from '../utilities/cart'

const ProductCard = ({product}) => {
    const { wishlistState, wishlistDispatch } = useWishlist();
    const { wishlist } = wishlistState;
    const { cartItemsState, cartItemsDispatch } = useCart();
    const { userInfo } = useAuth();
    const { authToken, userStatus } = userInfo;
    const navigate = useNavigate();
  return (
    <div className="product-card flex-column">
        <div>
            <img className="wishlist-product-img" src={product.img} alt="nft/img" />
        </div>
        <div className="product-name text-sm">
            {product.title}
        </div>
        <div className="product-author">
            by {product.author}
        </div>
        <div className="product-price">
            <p>Rs. {product.price}</p>
            <p>{product.rating} <i className="fa-regular fa-star"></i></p>
        </div>
        {cartItemsState.cartProducts.find((item) => item.id === product.id) ? 
        (
            <div className="move-to-cart">
                <a 
                    className="move-to-cart-action" 
                    onClick={() => deleteProductFromCart(product, cartItemsDispatch, authToken)}
                >
                    Remove from cart
                </a>
            </div>
        ) : (
            <div className="move-to-cart">
                <a 
                    className="move-to-cart-action" 
                    onClick={() => {
                        if(userStatus) {
                            addProductToCart(product, cartItemsDispatch, authToken)
                        } else {
                            navigate('/login')
                        }
                    }}
                >
                    Add to cart
                </a>
            </div>
        )}
        
        {wishlist.find((item) => item.id === product.id) ? (
            <div className="move-to-cart">
                <a 
                    className="delete-from-cart-action" 
                    onClick={() => 
                        deleteProductFromWishlist(product, wishlistDispatch, authToken, userStatus)
                    }
                >
                    Remove from wishlist
                </a>
            </div>
        ) : (
            <div className="move-to-cart">
                <a 
                    className="delete-from-cart-action" 
                    onClick={() => {
                        if(userStatus){
                            addProductToWishlist(product, wishlistDispatch, authToken, userStatus)
                        } else {
                            navigate('/login');
                        }
                    }
                    }
                >
                    Wishlist this NFT
                </a>
            </div>
        )}
       
    </div>
  )
}

export default ProductCard