import React from 'react'
import { useFilters } from '../contexts/filters-context'
import '../styles/sidebar.css'
const Sidebar = () => {
    const { state, dispatch } = useFilters();
    const {trending, art, bollywood, celebrity, ticket, sports, ethereum, polygon, solana, rating} = state;
  return (
    <aside className="product-filters flex-column">
        <p className="filters-title">Apply filters</p>     
        <div className="filters-section">
            <div className="filter-type filter-price">
                Price💰 
                <div className="filter-subtype">
                    <input 
                        type="radio" 
                        name="price" 
                        onChange={() => dispatch({ type: "sortBy", payload: "lowToHigh"})}
                    />{' '}
                    <label>Low to high</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="radio" 
                        name="price" 
                        onChange={() => dispatch({ type: "sortBy", payload: "highToLow"})}
                    />{' '}
                    <label>High to Low</label>
                </div>
            </div>
            <div className="filter-type filter-trend">
                Trend🔥
                <div className="filter-subtype">
                    <input
                        name="trending" 
                        type="checkbox" 
                        checked={trending}
                        onChange={(e) => dispatch({ type: "trending", payload: e.target.checked })}
                    />{' '}
                    <label>Show trending products only</label>
                </div>
            </div>
            <div className="filter-type filter-category">
                Category
                <div className="filter-subtype">
                    <input 
                        type="checkbox"
                        checked={art}
                        value={art}
                        onChange={(e) => dispatch({ type: "art", payload: e.target.checked })}
                    />{' '}
                    <label>art</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={celebrity}
                        value={celebrity}
                        onChange={(e) => dispatch({ type: "celebrity", payload: e.target.checked })}
                    />{' '}
                    <label>celebrity</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={bollywood}
                        value={bollywood}
                        onChange={(e) => dispatch({ type: "bollywood", payload: e.target.checked })}
                    />{' '}
                    <label>bollywood</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={ticket}
                        value={ticket}
                        onChange={(e) => dispatch({ type: "ticket", payload: e.target.checked })}
                    />{' '}
                    <label>ticket</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={sports}
                        value={sports}
                        onChange={(e) => dispatch({ type: "sports", payload: e.target.checked })}
                    />{' '}
                    <label>sports</label>
                </div>
            </div>
            <div className="filter-type filter-chain">
                Blockchain
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={ethereum}
                        value={ethereum}
                        onChange={(e) => dispatch({ type: "ethereum", payload: e.target.checked })}
                    />{' '}
                    <label>Ethereum (ETH)</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={solana}
                        value={solana}
                        onChange={(e) => dispatch({ type: "solana", payload: e.target.checked })}
                    />{' '}
                    <label>Solana (SOL)</label>
                </div>
                <div className="filter-subtype">
                    <input 
                        type="checkbox" 
                        checked={polygon}
                        value={polygon}
                        onChange={(e) => dispatch({ type: "polygon", payload: e.target.checked })}
                    />{' '}
                    <label>Polygon (MATIC)</label>
                </div>
            </div>
            <div className="filter-type">
                Rating
                <div className="filter-subtype">
                    1
                    <input 
                        type="range" 
                        min="1" 
                        max="5"
                        onChange={(e) => dispatch({ type: "rating", payload: e.target.value })}
                    />
                    5
                </div>
            </div>   
            <button onClick={() => dispatch( {type: "clear" })} className='btn btn-secondary clear-filters' href="">Clear all</button>         
        </div> 
    </aside>
  )
}

export default Sidebar