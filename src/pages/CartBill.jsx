import React from 'react'
import { useCart } from '../contexts/cart-context'

const CartBill = () => {
    const {cartItemsState} = useCart();
    const { cartProducts } = cartItemsState;
    //reduce method to count the total amount in the cart
    const cartAmountReducer = (previous, current) => previous + (current.qty*current.price);
    const cartTotalAmount = cartProducts.reduce(cartAmountReducer, 0);
    //reduce method to count the total number of products in the cart
    const itemsInCartReducer = (previous, current) => previous+current.qty;
    const totalItemsInCart = cartItemsState.cartProducts.reduce(itemsInCartReducer, 0);

  return (
    <div className="price-details">
        <p className="text-m">Price details</p>
        <hr />
        <div className="quantity-section flex-row">
            <p className='detail-item text-sm'>Total Items:</p>
            <p className="total-items">{totalItemsInCart}</p>
        </div>
        <div className="flex-row quantity-section">
            <p className="detail-item text-sm">Discount:</p>
            <div className="discount-price">Not available yet</div>
        </div>
        <div className="flex-row quantity-section">
            <p className="detail-item text-sm">Delivery Charges:</p>
            <div className="delivery-price">Free Delivery </div>
        </div>
        <br /><hr />
        <div className="text-m total-amount flex-row">
            <p>Total amount:</p>
            <p>Rs. {cartTotalAmount}</p>
        </div>
        <a className="place-order" href="#">Place order</a>
    </div>
  )
}

export default CartBill