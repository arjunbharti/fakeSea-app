import React, { useEffect } from 'react'
import Header from './Header'
import '../styles/wishlist.css'
import { useWishlist } from '../contexts/wishlist-context'
import ProductCard from './ProductCard'

const Wishlist = () => {
    useEffect(() => {
        document.title = 'Wishlist | FakeSea'
    }, [])

    const { wishlistState } = useWishlist();
    return (
      <>
          <Header />
          <p className="cart-title text-l">My wishlist</p>
            {wishlistState.wishlist.length === 0 ? (
                <>
                <p className='text-center empty-wishlist-text text-l'>kya kar rhe ho *folks* nft toh add kro</p>
                <div className='text-center empty-wishlist flex-row'>
                    <img className='empty-wishlist-photo' src="https://images.hindustantimes.com/img/2022/01/30/550x309/Ashneer_ST_1643542117048_1643542159601.jpeg" alt="" />
                </div>
                </>
                ) : (
                <section className="wishlist-container">
                {wishlistState.wishlist.map((product) => {
                    return (
                        <>
                            <ProductCard key={product.id} product={product} />
                        </>
                    ) 
                })}
                </section>
              )}
      </>
    )
}

export default Wishlist