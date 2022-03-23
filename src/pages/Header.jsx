import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'
import '../styles/header.css'

const Header = () => {
    const { userInfo: { encodedToken } } = useAuth();
  return (
    <header>
        <div className="logo-items">
            <img className="logo" src="/assets/icon.png" alt="icon/img" />
            <Link className="header-name" to="/">FakeSea</Link>    
        </div>
        <input className="nav-search" type="search" placeholder="Search trending NFTs here..." />
        <nav>
            <div className="nav-action-items">
                {encodedToken ? (
                    <Link className="nav-login-action" to="/profile">Profile</Link>
                ) : (
                    <Link className="nav-login-action" to="/login">Login</Link>
                )}
                <Link className="nav-bookmark-action" to="/wishlist"><i className="far fa-heart"><span className="badge-icon">0</span></i></Link>
                <Link className="nav-cart-action" to="/cart"><i className="fa fa-shopping-cart"><span className="badge-icon">0</span></i></Link>
            </div>
        </nav>
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </header>
  )
}

export default Header