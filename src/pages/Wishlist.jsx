import React, { useEffect } from 'react'
import Header from './Header'
import '../styles/wishlist.css'
const Wishlist = () => {
    useEffect(() => {
        document.title = 'Wishlist | FakeSea'
    }, [])
  return (
    <>
        <Header />
        <p className="cart-title text-l">My wishlist</p>
        <section class="wishlist-container">
        <div class="product-card flex-column">
            <div>
                <img class="wishlist-product-img" src="../assets/bollywood-gabbar-one.png" alt="nft/img" />
            </div>
            <div class="product-name text-sm">
                Bollywood Gabbar
            </div>
            <div class="product-author">
                by BollyDev
            </div>
            <div class="product-price">
                Rs. 450
            </div>
            <div class="move-to-cart">
                <a class="move-to-cart-action" href="#">Move to cart</a>
            </div>
            <div class="move-to-cart">
                <a class="delete-from-cart-action" href="#">Delete from cart</a>
            </div>
        </div> 
        <div class="product-card flex-column">
            <div>
                <img class="wishlist-product-img" src="../assets/bollywood-thakur-two.png" alt="nft/img" />
            </div>
            <div class="product-name text-sm">
                Bollywood Thakur
            </div>
            <div class="product-author">
                by BollyDev
            </div>
            <div class="product-price">
                Rs. 550
            </div>
            <div class="move-to-cart">
                <a class="move-to-cart-action" href="#">Move to cart</a>
            </div>
            <div class="move-to-cart">
                <a class="delete-from-cart-action" href="#">Delete from cart</a>
            </div>
        </div> 
        <div class="product-card flex-column">
            <div>
                <img class="wishlist-product-img" src="../assets/elon-space-party-three.jpg" alt="nft/img" />
            </div>
            <div class="product-name text-sm">
                Thug Elon #2345 NFT
            </div>
            <div class="product-author">
                by web3 bro
            </div>
            <div class="product-price">
                Rs. 999
            </div>
            <div class="move-to-cart">
                <a class="move-to-cart-action" href="#">Move to cart</a>
            </div>
            <div class="move-to-cart">
                <a class="delete-from-cart-action" href="#">Delete from cart</a>
            </div>
        </div>
        <div class="product-card flex-column">
            <div>
                <img class="wishlist-product-img" src="../assets/elon-space-party-two.jpg" alt="nft/img" />
            </div>
            <div class="product-name text-sm">
                Thug Elon #1999 NFT
            </div>
            <div class="product-author">
                by web3 bro
            </div>
            <div class="product-price">
                Rs. 899
            </div>
            <div class="move-to-cart">
                <a class="move-to-cart-action" href="#">Move to cart</a>
            </div>
            <div class="move-to-cart">
                <a class="delete-from-cart-action" href="#">Delete from cart</a>
            </div>
        </div>            
    </section>
    </>
  )
}

export default Wishlist