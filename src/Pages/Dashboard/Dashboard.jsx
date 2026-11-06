import React from 'react'
import { Slidebar } from '../../Components/Slidebar'
const Dashboard = () => {
  return (
    <>
     <div className='flex flex-row w-full h-dvh bg-red-500'>
       <div className='w-1/6 h-full bg-blue-600'>
        <Slidebar role={"visitor"}/>
       </div>
        <div className='bg-white'>
          right side b
        </div>
     </div>
    </>
)
}
export default Dashboard