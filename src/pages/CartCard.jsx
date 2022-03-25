import React from 'react'
import { useCart } from '../contexts/cart-context';
const CartCard = ({item}) => {
    const { cartItems, setCartItems } = useCart();
  return (
    <div className="product-card flex-column">
        <div>
            <img className="wishlist-product-img" src={item.img} alt="nft/img" />
        </div>
        <div className="product-name text-sm">
            {item.title}
        </div>
        <div className="product-author">
            by {item.author}
        </div>
        <div className="product-price">
            <p>Rs. {item.price}</p>
            <p>{item.rating} <i className="fa-regular fa-star"></i></p>
        </div>
        {cartItems.cartProducts.find((product) => product.id === item.id) ? (
            <>
                <div className="flex-row quantity-section">
                    <p className="detail-item text-sm">Quantity: </p>
                    <div className="cart-actions flex-row">
                        <a 
                            className="cart-item-action" 
                            onClick={() => setCartItems({ type: "item-increment", payload: item })}
                        > + 
                        </a>
                        <p className="cart-items-count">{item.quantity}</p>
                        <a 
                            className="cart-item-action" 
                            onClick={() => setCartItems({ type: "item-decrement", payload: item })}
                        >-
                        </a>
                    </div>
                </div>
                <div className="move-to-cart">
                    <a 
                        className="move-to-cart-action" 
                        onClick={() => setCartItems({ type: "remove-from-cart", payload: item })}
                    >
                        Remove from cart
                    </a>
                </div>
            </>
        ): (
            <div className="move-to-cart">
                <a className="move-to-cart-action">Move to wishlist</a>
            </div>
        )}
        
    </div>
  )
}

export default CartCard