import React, { useState } from "react";
import { ProfileAvatar } from "../Hooks/ProfileAvatar";

export const Slidebar = ({role,userName})=> {
    const [active, setActive] = useState(101);

    const VisitorButtons = [
        {title:"Book Appointment", type:101},
        {title:"History", type: 102},
        {title:"Setting", type: 103}
    ]
    const handleLogOut = ()=> {
        alert("Not implemented");
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
               <div className="mx-3 cursor-pointer">
                 { VisitorButtons.map((btn)=>(
                <p
                    onClick={()=>setActive(btn.type)}
                    className={active === btn.type ? "bg-blue-400 py-2 px-3 rounded-lg text-white font-semibold" : "bg-white font-semibold py-2 px-3"}
                    >{btn.title}</p>
            ))}
               </div>
                <div className="mx-3 pb-6">
                    <p 
                    onClick={handleLogOut}
                    className="py-2 px-3 rounded-lg bg-red-300 font-semibold text-white cursor-pointer">Logout</p>
                </div>
            </div>
            
            </>
            // <>
            //     <div>
            //         <div className="pl-5 pt-5 flex gap-3 pb-6 items-center">
            //             <ProfileAvatar userName={userName}/>
            //             {userName && (
            //              <p>{userName}</p>
            //          )}
            //         </div>
            //     </div>
            //     <div className="flex flex-col h-[calc(100dvh-132px)] justify-between">
            //         <ul 
            //             className="flex flex-col gap-3 mx-3 cursor-pointer">
            //             <li
            //                 onClick={()=>setActive("Book Appointment")}
            //                 className={active === "Book Appointment" ? "bg-blue-400 py-2 px-3 rounded-lg text-white font-semibold" : "bg-white font-semibold py-2 px-3"}
            //             >Book Appointment</li>
            //             <li
            //                 onClick={()=>setActive("History")}
            //                 className={active === "History" ? "bg-blue-400 py-2 px-3 rounded-lg text-white font-semibold" : "bg-white font-semibold py-2 px-3"}
            //             >History</li>
            //         </ul>
            //        <div className="mx-3 pb-6">
            //             <p 
            //                 onClick={handleLogOut}
            //                 className="py-2 px-3 rounded-lg bg-red-300 font-semibold text-white cursor-pointer">Logout</p>
            //        </div>
            //     </div>
            // </>
        )
    }
    return (
        <>
            
        </>
    )
}