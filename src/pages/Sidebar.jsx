import React from 'react'
import '../styles/sidebar.css'
const Sidebar = () => {
  return (
    <aside className="product-filters flex-column">
        <p className="filters-title">Apply filters</p> 
        <button id="filter-btn" className="btn btn-secondary btn-curved">Apply filters</button>
    
        <div className="filters-section">
            <div className="filter-type filter-price">
                Price💰 
                <div className="filter-subtype">
                    <input type="radio" name="price" />{' '}
                    <label>Low to high</label>
                </div>
                <div className="filter-subtype">
                    <input type="radio" name="price" />{' '}
                    <label>High to Low</label>
                </div>
            </div>
            <div className="filter-type filter-trend">
                Trend🔥
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>Show trending products only</label>
                </div>
            </div>
            <div className="filter-type filter-category">
                Category
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>art</label>
                </div>
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>celebrity</label>
                </div>
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>bollywood</label>
                </div>
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>ticket</label>
                </div>
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>sports</label>
                </div>
            </div>
            <div className="filter-type filter-chain">
                Blockchain
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>Ethereum (ETH)</label>
                </div>
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>Solana (SOL)</label>
                </div>
                <div className="filter-subtype">
                    <input type="checkbox" />{' '}
                    <label>Polygon (MATIC)</label>
                </div>
            </div>
            <div className="filter-type">
                Rating
                <div className="filter-subtype">
                    1
                    <input type="range" id="volume" name="volume"
                       min="0" max="5" />
                    5
                </div>
            </div>           
        </div> 
    </aside>
  )
}

export default Sidebar