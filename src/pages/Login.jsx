import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../styles/login-and-signup.css'
import Header from './Header'
import { useAuth } from '../contexts/auth-context'
import { loginHandler } from '../utilities/auth'

const formInitialState = {
    email: '',
    password: '',
    rememberMe: false,
}

const Login = () => {
    const [formData, setFormData] = useState(formInitialState);
    const { email, password, rememberMe } = formData;
    const { saveUserInfo } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const inputHandler = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }))
    }
    const handleToggle = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.checked
        }))
    }
  return (
    <>
        <Header />
        <main className="login-page">
            <form className="login-card flex-column">
                <p className="text-l login-heading">Login</p>
                <div className="login-input-field flex-column">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input   
                            type="email" 
                            name="email"
                            className="input-class"
                            placeholder="Enter your email here"
                            onChange={inputHandler}
                            value={email}
                    />
                </div>
                <div className="login-input-field flex-column">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input 
                            type="password" 
                            name="password"
                            className="input-class"
                            placeholder="Enter your password"
                            onChange={inputHandler}
                            value={password}
                    />
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                        onChange={handleToggle}
                        value={rememberMe}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <a className="forgot-password" href="#">Forgot your password?</a>
                <a onClick={(e) => loginHandler({
                    e,
                    email,
                    password,
                    saveUserInfo,
                    setFormData,
                    navigate,
                    from,
                    formInitialState,
                })} className="btn-login">Login</a>
                <Link className="signup-btn" to="/signup">Create new account</Link>
            </form>
        </main>
    </>
  )
}

export default Login