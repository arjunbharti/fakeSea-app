import React from 'react'
import '../styles/showcase.css'
import { expensiveProducts, trendingProducts } from '../backend/db/showcase'

const Showcase = () => {
  return (
    <section className="trending-products">
        <div className="sub-heading text-l">Trending Now 🔥</div> 
        <div className="trending-products-items">
            {trendingProducts.map((product) => {
                return (
                    <div className="card card-horizontal">
                        <div className="card-horizontal-head">
                            <img src={product.img} alt="horizontal-img" className="w-2 h-8 card-horizontal-img" />
                            <div className="card-body">
                                <div className="card-body-title">
                                    {product.title}
                                </div>
                                <div className="card-body-subtitle">
                                    {product.author}
                                </div>
                            </div>
                        </div>
                        <div className="card-horizontal-action-items">
                            <div className="card-action-items">
                                <button className="btn-card">BUY NOW</button>
                                <div className="card-horizontal-actions">
                                    <span>{product.rating}<i className="fa-regular fa-star"></i></span>
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>   
        <div className="sub-heading text-l">Most Expensive 💰</div> 
        <div className="trending-products-items">
            {expensiveProducts.map((product) => {
                return (
                    <div className="card card-horizontal">
                        <div className="card-horizontal-head">
                            <img src={product.img} alt="horizontal-img" className="w-2 h-8 card-horizontal-img" />
                            <div className="card-body">
                                <div className="card-body-title">
                                    {product.title}
                                </div>
                                <div className="card-body-subtitle">
                                    {product.author}
                                </div>
                            </div>
                        </div>
                        <div className="card-horizontal-action-items">
                            <div className="card-action-items">
                                <button className="btn-card">BUY NOW</button>
                                <div className="card-horizontal-actions">
                                    <span>Rs. {product.price}</span>
                                    <i className="far fa-heart bookmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Showcase