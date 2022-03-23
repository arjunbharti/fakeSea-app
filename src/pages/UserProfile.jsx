import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context'
import Header from './Header'

const UserProfile = () => {
    const { userInfo, removeUserInfo } = useAuth();
    const { firstName, lastName, email } = userInfo.foundUser;
    const navigate = useNavigate();

  return (
    <>
        <Header />
        <div className="profile-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <a 
                className='btn btn-primary'
                onClick={() => removeUserInfo(navigate)}
            >Logout</a>
        </div>
    </>
  )
}

export default UserProfile