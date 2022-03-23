import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')) || {})

    const [token, setToken] = useState(userInfo?.token);

    const saveUserInfo = (userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    const removeUserInfo = (navigate) => {
        setUserInfo({});
        localStorage.removeItem('userInfo');
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ token, userInfo, saveUserInfo, removeUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider };