import React from 'react'
import { ProfileAvatar } from '../Hooks/ProfileAvatar'

const Header = ({isLogin, userName}) => {

    if(isLogin){
        return (
            <>
            <div className='flex justify-between px-8 py-2.5 bg-blue-500'>
                <h1 className='text-2xl font-semibold text-white'>Vistiq</h1>
                <div className='flex gap-2 just items-center'>
                    <ProfileAvatar userName={userName}/>
                    <span className='text-white'>{userName}</span>
                </div>
            </div>
            </>
        )
    }
  return (
    <>
        <div className='w-full flex flex-row bg-blue-700 py-2 justify-between px-20 items-center'>
            <div>
                <h1 className='text-2xl font-bold text-white'>Vistiq</h1>
            </div>
            <div className='flex flex-row gap-10'>
                <li className='list-none'><a href="#" className='text-white'>Book Now</a></li>
                <li className='list-none'><a href="#about" className='text-white'>About us</a></li>
                <li className='list-none'><a href="Contact us" className='text-white'>Contact us</a></li>
            </div>
            <div className='flex flex-row gap-8'>
                <li className='list-none'><a href="#login" className='text-white'>Login</a></li>
                <li className='list-none'><a href="#signup" className='text-white'>Signup</a></li>
            </div>
        </div>
    </>
  )
}

export default Header