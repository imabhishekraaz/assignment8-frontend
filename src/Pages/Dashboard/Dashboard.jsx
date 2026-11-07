import React from 'react'
import { Slidebar } from '../../Components/Slidebar'

const Dashboard = ({userName}) => {
  return (
    <>
     <div className="flex flex-row w-full h-[calc(100dvh - 48px)] overflow-hidden">
      <div className="w-1/5 h-full shrink-0 shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)]">
          <Slidebar role={"visitor"} userName={userName}/>
      </div>
      <div className="w-4/5 h-inherit overflow-hidden ">
        
      </div>
    </div>
  </>
)
}
export default Dashboard