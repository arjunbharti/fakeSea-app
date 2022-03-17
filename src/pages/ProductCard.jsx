import React from 'react'
import '../styles/product-card.css'

const ProductCard = ({product}) => {
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
        <div className="move-to-cart">
            <a className="move-to-cart-action" href="#">Add to cart</a>
        </div>
        <div className="move-to-cart">
            <a className="delete-from-cart-action" href="#">Wishlist this NFT</a>
        </div>
    </div>
  )
}

export default ProductCard