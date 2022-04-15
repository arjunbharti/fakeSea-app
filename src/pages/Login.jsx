import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login-and-signup.css'
import Header from './Header'
import { useAuth } from '../contexts/auth-context'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "arjun@gmail.com",
        password: "arjun123"
    });
    const { userInfo, setUserInfo } = useAuth();
    const navigate = useNavigate();

    const loginHandler = async({email, password}) => {
        try{
          const {data : {encodedToken}} = await axios.post("/api/auth/login", {
            email: email,
            password: password,
          })
          localStorage.setItem("token", encodedToken)
          setUserInfo({...userInfo, 
            authToken : encodedToken,
            userStatus : true
          })
          navigate("/")
        } catch(error){
          console.log(error.message)
        }
    }

  return (
    <>
        <Header />
        <main className="login-page">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    loginHandler(formData)
                }}
                className="login-card flex-column"
            >
                <p className="text-l login-heading">Login</p>
                <div className="login-input-field flex-column">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input   
                            type="email" 
                            name="email"
                            className="input-class"
                            placeholder="Enter your email here"
                            onChange = {(e) => setFormData({...formData, email : e.target.value})}
                    />
                </div>
                <div className="login-input-field flex-column">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input 
                            type="password" 
                            name="password"
                            className="input-class"
                            placeholder="Enter your password"
                            onChange = {(e) => setFormData({...formData, password : e.target.value})}
                    />
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <a className="forgot-password" href="#">Forgot your password?</a>
                <button type='submit' className="btn-login text-sm">Login</button>
                <button onClick={(e) => loginHandler({ email: "arjun@gmail.com", password: "arjun123" })} className="btn-login text-sm">Guest Login</button>
                <Link className="signup-btn" to="/signup">Create new account</Link>
            </form>
        </main>
    </>
  )
}

export default Login