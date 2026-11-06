import React from "react";
import { ProfileAvatar } from "../Hooks/ProfileAvatar";

export const Slidebar = ({role})=> {
    const userName = "Abhishek Raj";
   
    if(role === "visitor"){
        return (
            <>
                <div>
                    <div className="pl-5 pt-5 flex gap-3 pb-6 items-center">
                        <ProfileAvatar userName={userName}/>
                        {userName && (
                         <p>{userName}</p>
                     )}
                    </div>
                </div>
                <div className="flex flex-col h-[calc(100dvh-132px)] justify-between">
                    <ul className="pl-6 pt-5 flex flex-col gap-3">
                        <li>Book Appointment</li>
                        <li>History</li>
                    </ul>
                   <div className="pl-6 pt-5 pb-6">
                        <p>Logout</p>
                   </div>
                </div>
            </>
        )
    }
    return (
        <>
            
        </>
    )
}