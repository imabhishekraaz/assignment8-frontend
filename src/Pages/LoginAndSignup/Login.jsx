import React, { useState } from 'react'
import img1 from '../../public/img-1.webp';
import InputBox from '../../Components/InputBox';
import { call, lockClosed } from 'ionicons/icons';
import Button from '../../Components/Button';
import { user } from '../../APIs/api';
import { useNavigate } from 'react-router-dom';
import { token } from '../../APIs/Auth';

const Login = ({userName, isLogin, setError}) => {
  const [telephone, setTelephone] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async ()=> {
    if(!telephone || !password){
      setError("telephone and password are required");
      return;
    }
    const loginDetails = {
      telephone:telephone,
      password:password
    };
    const res = await user.login(loginDetails)
     
    if(!res){
      setError("Something went wrong")
    };
     
    setError("");
    console.log(res)
    token.saveToken(res.data.token);
    navigate("/dashboard");
  };

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