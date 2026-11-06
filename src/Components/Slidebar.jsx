import React from "react";
import { ProfileAvatar } from "../Hooks/ProfileAvatar";

export const Slidebar = ({role})=> {
    const userName = "Abhishek Raj";
   
    if(role === "visitor"){
        return (
            <>
                <div>
                    <div className="pl-5 pt-5 flex gap-3 pb-8 items-center">
                        <ProfileAvatar userName={userName}/>
                        {userName && (
                         <p>{userName}</p>
                     )}
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                   <div>
                        <p>Book Apointments</p>
                        <p>History</p>
                   </div>
                   <div>
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