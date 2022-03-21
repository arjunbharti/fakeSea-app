import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import '../styles/products.css'
import axios from 'axios';
import ProductCard from './ProductCard';
import { useFilters } from '../contexts/filters-context';
import { getSortedProducts, getFilteredData, filterByCategory, filterByChain, filterByRating } from '../utilities/index'

const Products = () => {
    const {state} = useFilters();
    const {sortBy, trending, category, chain, rating} = {...state};
   
    useEffect(() => {
        getProducts();
    }, [])

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true)
            const res = await axios.get('/api/products');
            setProducts(res.data.products);
            setLoading(false);
        } catch (error) {
            alert(error.message);
        }
    }

    const data = [...products];
    const sortedProducts = getSortedProducts(data, sortBy);
    const filtered = getFilteredData(sortedProducts, trending)
    const filteredProductsByCategory = filterByCategory(filtered, category);
    const chainData = filterByChain(filteredProductsByCategory, chain)
    const ratingData = filterByRating(chainData, rating);

    return (
    <>
        <Header />
        <section className='products flex-row'>
            <Sidebar />
            <main className="products-section">
            Explore fake NFT collections
            {loading ? (<p>loading...</p>) : (
                <div className="products-container">
                    {ratingData.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            )}        
            </main>
        </section>
    </>
  )
}

export default Products