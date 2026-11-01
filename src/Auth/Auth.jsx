import React, { useEffect, useState } from 'react'
import { user } from '../APIs/api'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Auth = ({setError, setIsLogin, setUserName}) => {
  const [loading, setLoading] = useState(false);
  const [isAuth, setAuth] = useState(false);

  useEffect(()=>{
    Authentication();    
  },[]);

  const Authentication = async ()=> {

    const token = localStorage.getItem("token");
    if(!token){
      setIsLogin(false);
      setLoading(false);
      setAuth(false);
      setError("Token is missing")
      return;
    };

    const res = await user.verifyUser(token);

      if(!res){
        console.error(error)
        localStorage.removeItem("token");
        setIsLogin(false);
        setAuth(false);
        setError("Session expired. Please login again.")
        return;
      }
      setError("")
      setIsLogin(true)
      setUserName(e.data.user.name)
      setAuth(true);
      setLoading(false)
  }

  if(loading){
    return <div>Loading...</div>
  };
  return isAuth ? <Outlet/> : <Navigate to="/login" replace/>
}

export default Auth