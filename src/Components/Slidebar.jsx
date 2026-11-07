import React, { useState } from "react";
import { ProfileAvatar } from "../Hooks/ProfileAvatar";

export const Slidebar = ({role})=> {
    const [active, setActive] = useState("Book Appointment");
    const userName = "Abhishek Raj";
    const handleP = (e)=>{
        console.log("Abhishek Raj");
    }

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
                    <ul 
                        className="flex flex-col gap-3 mx-3">
                        <li
                            onClick={()=>setActive("Book Appointment")}
                            className={active === "Book Appointment" ? "bg-blue-400 py-2 px-3 rounded-lg text-white font-semibold" : "bg-white font-semibold py-2 px-3"}
                        >Book Appointment</li>
                        <li
                            onClick={()=>setActive("History")}
                            className={active === "History" ? "bg-blue-400 py-2 px-3 rounded-lg text-white font-semibold" : "bg-white font-semibold py-2 px-3"}
                        >History</li>
                    </ul>
                   <div className="mx-3 pb-6">
                        <p className="py-2 px-3 rounded-lg bg-red-300 font-semibold text-white">Logout</p>
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