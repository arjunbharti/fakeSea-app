import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);
//authStatus --> userStatus
//authCred --> userInfo, setUserInfo
const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        authToken : localStorage.getItem("token"), 
        userStatus : !!localStorage.getItem("token") 
    })
    return(
        <AuthContext.Provider value = {{userInfo, setUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider };