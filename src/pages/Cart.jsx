import React, { useEffect } from 'react'
import '../styles/cart.css'
import Header from './Header'

const Cart = () => {
    useEffect(() => {
        document.title = "Cart | FakeSea"
    }, [])
    return (
        <>
            <Header />
            <p className="cart-title text-l">My cart</p>
            {/* <section className="cart-container">
                <div className="product-card flex-column">
                    <div>
                        <img className="wishlist-product-img" src="../assets/bollywood-gabbar-one.png" alt="nft/img" />
                    </div>
                    <div className="product-name text-sm">
                        Bollywood Gabbar NFT
                    </div>
                    <div className="product-author">
                        by BollyDev
                    </div>
                    <div className="product-price">
                        Rs. 450
                    </div>
                    <div className="move-to-cart">
                        <a className="move-to-cart-action" href="#">Remove from cart</a>
                    </div>
                    <div className="move-to-cart">
                        <a className="delete-from-cart-action" href="#">Move to wishlist</a>
                    </div>
                </div>
            </section> */}
            <section className='cart-amount-card'>
                <div className="price-details">
                    <p className="text-m">Price details</p>
                    <hr />
                    <div className="flex-row quantity-section">
                        <p className="detail-item text-sm">Quantity: </p>
                        <div className="cart-actions flex-row">
                            <a className="cart-item-action" href="">+</a>
                            <p className="cart-items-count">2</p>
                            <a className="cart-item-action" href="#">-</a>
                        </div>
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
                        <p>Total amount: </p>
                        <p>Rs. 900</p>
                    </div>
                    <a className="place-order" href="#">Place order</a>
                </div>
            </section>
        </>
  )
}

export default Cart