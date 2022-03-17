import React, { useEffect } from 'react'
import '../styles/homepage.css'
import Header from './Header'
import Showcase from './Showcase'
import BuyerGuide from './BuyerGuide'
import { Link } from 'react-router-dom'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Products from './Products'
const Homepage = () => {
    useEffect(() => {
        document.title = "FakeSea | Home"
    }, [])
  return (
    <>
    <Header />
    <main>
        <section>
            <div className="main-content">
                <div className="main-heading">
                    <h1 className="heading">Discover, buy and show off trending NFTs</h1>
                    <h3 className="heading-description">FakeSea is the largest marketplace for <br /> fake NFTs aka jpeg and png files. <br />Sorry web3, hello web2 </h3>
                    <div className="main-action-items">
                        <Link className="action-primary" to="/products">Explore</Link>
                        <Link className="action-secondary" to="/details">Know More</Link>    
                    </div>
                </div>
                <div className="banner-content">
                    <img className="main-banner" src="/assets/banner.png" alt="" />
                </div>
            </div>
        </section>
    </main>
    <Showcase />   
    <BuyerGuide />
    <footer>
        <p className="footer-text text-m text-center">Made by <a className="creator-name" target="_blank" href="https://twitter.com/iarjunbharti">Arjun Bharti</a></p>
    </footer>
    </> 
  )
}

export default Homepage;