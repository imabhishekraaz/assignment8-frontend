import React from "react";
import { Slide } from "../components/Slide";

export const Dashboard = ({userName})=> {
    return (
        <>
        <div>
            {userName && (
                <h1
                    className="text-2xl pl-4 pt-3 font-semibold"
                >Good Morning, {userName}</h1>
            )}
            <Slide/>
        </div>
        </>
    )   
}