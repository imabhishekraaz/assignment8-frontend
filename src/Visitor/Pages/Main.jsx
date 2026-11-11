import React, { useState } from 'react'
import { Slidebar } from '../../Components/Slidebar'
import { Dashboard } from './Dashboard';
import { HistoryPage } from './HistoryPage';
import { SettingsPage } from './SettingsPage';
import { AppointmentPage } from './appointmentPage';

const Main = ({userName}) => {
  const [Nav, setNav] = useState('book-appointment');

  return (
    <>
     <div className="flex flex-row w-full h-[calc(100dvh - 48px)] overflow-hidden">
      <div className="w-1/5 h-full shrink-0 shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)]">
          <Slidebar role={"visitor"} userName={userName} setNav={setNav}/>
      </div>
      <div className="w-4/5 h-inherit overflow-hidden ">
        {
          Nav === "book-appointment" && <AppointmentPage/> ||
          Nav === "history" && <HistoryPage/> ||
          Nav === "settings" && <SettingsPage/> ||
          Nav === "dashboard" && <Dashboard userName={userName}/>
        }
      </div>
    </div>
  </>
)
}
export default Main