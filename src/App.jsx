import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/LoginAndSignup/Login'
import InputBox from './Components/InputBox';
import {person } from 'ionicons/icons';
import Button from './Components/Button';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard/Dashboard';
import Auth from './Auth/Auth'
import Error from './Error/Error';
import { ProfileAvatar } from './Hooks/ProfileAvatar';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("Abhishek");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return ( 
    <>
    <Error error={error}/>
    <Header isLogin={isLogin} userName={userName}/>
    <Routes>
      {/* Public Routes */}
      <Route path='/login' element={<Login setError={setError} setUserName={setUserName} setIsLogin={setIsLogin}/>}/>

      {/* private Routes */}
      <Route path='/' element={<Auth setError={setError} setIsLogin={setIsLogin} setUserName={setUserName}/>}>
        <Route path='/' element={<Dashboard userName={userName}/>}/>
        <Route path='/test' element={<ProfileAvatar userName={"Mahesh Raj"}/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
