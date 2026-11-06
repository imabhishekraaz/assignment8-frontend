import React from 'react'
import { Slidebar } from '../../Components/Slidebar'
const Dashboard = () => {
  return (
    <>
     <div className="flex flex-row w-full h-[calc(100dvh - 48px)] bg-red-500 overflow-hidden">
      <div className="w-1/5 h-full shrink-0">
          <Slidebar role={"visitor"} />
      </div>
      <div className="w-4/5 h-full bg-white overflow-y-auto min-w-0">
          right side b
      </div>

    </div>
  </>
)
}
export default Dashboard