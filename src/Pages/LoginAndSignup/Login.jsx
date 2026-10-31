import React, { useState } from 'react'
import img1 from '../../public/img-1.webp';
import InputBox from '../../Components/InputBox';
import { call, lockClosed } from 'ionicons/icons';
import Button from '../../Components/Button';

const Login = ({userName, isLogin}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [telephone, setTelephone] = useState(null);
  const [password, setPassword] = useState(null)

  const handleLogin = ()=> {
    alert("clicked")
    return;
  }

  return (
    <>
        <div className='w-full max-h-dvh flex items-center justify-evenly gap-10 overflow-x-hidden'>
          <img 
            className='w-1/2 max-w-150 h-auto object-contain mt-10'
            src={img1} 
            alt="image-1" />
          <div className='h-full flex flex-col gap-5'>
            <div>
              <h2 className='text-2xl text-center'>Welcome Back!</h2>
            </div>
              <div
                className='border-2 border-gray-200 rounded-xl w-80 h-12 flex justify-center'
              >
                <InputBox
                  placeHolder={"Mobile Number"}
                  type={"tel"}
                  value={telephone}
                  onChange={setTelephone}
                  icon={call}
                />
              </div>
            <div
                className=' w-80 h-12 flex justify-center border-2 border-gray-200 rounded-xl'
              >
                <InputBox
                  placeHolder={"Password"}
                  type={"Password"}
                  value={password}
                  onChange={setPassword}
                  icon={lockClosed}
                />
              </div>
              <div
                className='w-full h-12 bg-blue-700 overflow-hidden flex justify-center items-center rounded-xl border-2 border-gray-200'
              >
                <Button
                  onClick={handleLogin}
                  name={"Submit"}
                />
              </div>
          </div>
          
        </div>
    </>
  )
}

export default Login