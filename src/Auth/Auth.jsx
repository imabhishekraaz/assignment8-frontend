import React, { useEffect, useState } from 'react'
import { user } from '../APIs/api'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Auth = ({setError, setIsLogin, setUserName}) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);

  useEffect(()=>{
    Authentication();    
  },[]);

  const Authentication = async ()=> {
    try {
      const res = await user.verifyUser();

      if(!res){
        console.error("something went wrong")
        localStorage.removeItem("token");
        setIsLogin(false);
        setAuth(false);
        setError("Session expired. Please login again.")
        return;
      }
      setError("")
      setIsLogin(true)
      setUserName(res.data.user.name)
      setAuth(true);
    } catch (error) {
      console.error("Authentication failed", error);
      localStorage.removeItem("token");
      setIsLogin(false);
      setAuth(false);
      setError("Session expired. Please login again.");
    } finally {
      setLoading(false)
    }
  }

  if(loading){
    return <div>Loading...</div>
  };
  return isAuth ? <Outlet/> : <Navigate to="/login" replace/>
}

export default Auth