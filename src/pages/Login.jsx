import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login-and-signup.css'
import Header from './Header'

const Login = () => {
  return (
    <>
        <Header />
        <main class="login-page">
            <div class="login-card flex-column">
                <p class="text-l login-heading">Login</p>
                <div class="login-input-field flex-column">
                    <label for="email" class="email-label">Email address</label>
                    <input   
                            type="email" 
                            class="input-class"
                            placeholder="Enter your email here"
                    />
                </div>
                <div class="login-input-field flex-column">
                    <label for="password" class="password-label">Password</label>
                    <input 
                            type="password" 
                            class="input-class"
                            placeholder="Enter your password"
                    />
                </div>
                <div>
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <a class="forgot-password" href="#">Forgot your password?</a>
                <a href="#" class="btn-login">Login</a>
                <Link class="signup-btn" to="/signup">Create new account</Link>
            </div>
        </main>
    </>
  )
}

export default Login