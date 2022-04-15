import React, { useState } from 'react'
import { useAuth } from '../contexts/auth-context';
import { useCart } from '../contexts/cart-context';
import { deleteProductFromCart, updateCartQty } from '../utilities/cart';
const CartCard = ({item}) => {
    const { cartItemsState, cartItemsDispatch } = useCart();
    const { cartProducts } = cartItemsState;
    const [qty, setQty] = useState(1);
    const { userInfo } = useAuth();
    const { authToken, userStatus } = userInfo;
    const { quantity, detailedCartData } = cartItemsState;

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
        {cartProducts.find((product) => product.id === item.id) ? (
            <>
                <div className="flex-row quantity-section">
                    <p className="detail-item text-sm">Quantity: </p>
                    <div className="cart-actions flex-row">
                        <button
                            className="cart-item-action" 
                            onClick={() => updateCartQty("increment", item, cartItemsDispatch, authToken)}
                        > + 
                        </button>
                        <p className="cart-items-count">{item.qty}</p>
                        <button 
                            disabled={item.qty === 1}
                            className="cart-item-action" 
                            onClick={() => updateCartQty("decrement", item, cartItemsDispatch, authToken)}
                        >-
                        </button>
                    </div>
                </div>
                <div className="move-to-cart">
                    <a 
                        className="move-to-cart-action" 
                        onClick={() => deleteProductFromCart(item, cartItemsDispatch, authToken)}
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