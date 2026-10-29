import React, { useState } from 'react'
import img1 from '../public/img-1.webp';
import InputBox from '../Components/InputBox';
import { call, lockClosed } from 'ionicons/icons';
import Button from '../Components/Button';

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
        <div className='w-screen h-screen flex flex-row  justify-between px-30 py-30'>
          <img 
            className=''
            src={img1} 
            alt="image-1" />
          <div className='h-full flex flex-col gap-5'>
              <div
                className='border-2 border-gray-200 rounded-xl'
              >
                <InputBox
                  placeHolder={"Mobile Number"}
                  type={"Text"}
                  value={telephone}
                  onChange={setTelephone}
                  icon={call}
                />
              </div>
            <div
                className='border-2 border-gray-200 rounded-xl'
              >
                <InputBox
                  placeHolder={"Password"}
                  type={"Text"}
                  value={telephone}
                  onChange={setTelephone}
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