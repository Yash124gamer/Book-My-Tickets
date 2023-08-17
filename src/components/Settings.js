import React, { useContext } from 'react'
import LoginContext from '../context/LoginContext';

export default function Settings() {

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  return (
    isLoggedIn.isLoggedIn?(
        <>
            
        </>
    ):
    (
        <>
            <div className='container d-flex justify-content-center ' style={{color:"white"}}>
                Please Log in to see Your Details
            </div>
        </>
    )
  )
}
