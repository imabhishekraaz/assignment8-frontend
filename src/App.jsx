import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './LoginAndSignup/Login'
import InputBox from './Components/InputBox';
import {person } from 'ionicons/icons';
import Button from './Components/Button';
import Header from './Components/Header';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("Abhishek");


  return (
    <>
    <Header/>
    <Routes>
      {/* <Route path='/test' element={<Button onClick={setUserName} name={"Submit"}/>}/> */}
      <Route path='/' element={<Login userName={setUserName} isLogin={isLogin}/>}/>
    </Routes>
    </>
  )
}

export default App
