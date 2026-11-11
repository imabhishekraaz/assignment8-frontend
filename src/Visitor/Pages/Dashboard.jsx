import React from "react";
import { Slide } from "../components/Slide";

export const Dashboard = ({userName})=> {
    return (
        <>
        <div>
            {userName && (
                <h1>Good Morning, {userName}</h1>
            )}
            <Slide/>
        </div>
        </>
    )   
}