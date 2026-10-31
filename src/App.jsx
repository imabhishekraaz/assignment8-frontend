import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/LoginAndSignup/Login'
import InputBox from './Components/InputBox';
import {person } from 'ionicons/icons';
import Button from './Components/Button';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard/Dashboard';
import { createEvent } from './Utils/Event';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("Abhishek");
  const [error, setError] = useState("");

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/test' element={<Auth setError={setError} isLogin={setIsLogin}/>}>
        <Route path='/login' element={<Login userName={setUserName} isLogin={isLogin}/>}/>
        <Route path='/' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
