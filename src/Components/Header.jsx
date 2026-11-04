import React from 'react'

const Header = ({isLogin, userName}) => {
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