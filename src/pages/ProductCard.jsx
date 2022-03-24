import React from 'react'
import '../styles/product-card.css'
import { useWishlist } from '../contexts/wishlist-context'
import { useCart } from '../contexts/cart-context'

const ProductCard = ({product}) => {
    const { wishlistState, wishlistDispatch } = useWishlist();
    const { cartItems, setCartItems } = useCart();
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
        {cartItems.cartProducts.find((item) => item.id === product.id) ? 
        (
            <div className="move-to-cart">
                <a 
                    className="move-to-cart-action" 
                    onClick={() => setCartItems({ type: "remove-from-cart", payload: product })}
                >
                    Remove from cart
                </a>
            </div>
        ) : (
            <div className="move-to-cart">
                <a 
                    className="move-to-cart-action" 
                    onClick={() => setCartItems({ type: "add-to-cart", payload: product })}
                >
                    Add to cart
                </a>
            </div>
        )}
        
        {wishlistState.wishlist.find((item) => item.id === product.id) ? (
            <div className="move-to-cart">
                <a 
                    className="delete-from-cart-action" 
                    onClick={() => 
                        wishlistDispatch({ 
                            type: "remove-from-wishlist", 
                            payload: product
                        })
                    }
                >
                    Remove from wishlist
                </a>
            </div>
        ) : (
            <div className="move-to-cart">
                <a 
                    className="delete-from-cart-action" 
                    onClick={() => 
                        wishlistDispatch({
                            type: "add-to-wishlist",
                            payload: product
                        })
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