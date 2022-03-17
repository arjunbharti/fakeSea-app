import React, { useState, useEffect } from 'react'
import { products } from '../backend/db/products';
import Header from './Header'
import Sidebar from './Sidebar';
import '../styles/products.css'
import axios from 'axios';
import ProductCard from './ProductCard';

const Products = () => {
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
    
    return (
    <>
        <Header />
        <section className='products flex-row'>
            <Sidebar />
            <main className="products-section">
            Explore fake NFT collections
            {loading ? (<p>loading...</p>) : (
                <div className="products-container">
                    {products.map((product) => (
                        <ProductCard product={product}/>
                    ))}
                </div>
            )}        
            </main>
        </section>
    </>
  )
}

export default Products