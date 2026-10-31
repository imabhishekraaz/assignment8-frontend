import React, { useEffect } from 'react'
import { user } from '../APIs/api'
import { Outlet } from 'react-router-dom'

const Auth = ({setError, setIsLogin}) => {
  const token = localStorage.getItem("token")
  if(!token){
    setError("Token is missing");
    return;
  };
  user.verifyUser(token)
    .then((e)=>{
      setError("")
      setIsLogin(true)
      setUserName(e.data.user.name)
    })
    .catch((error)=>{
      setError(error)
      return;
    });

  return (
    <>
        <Outlet/>
    </>
  )
}

export default Auth