import React from "react";

export function ProfileAvatar({userName}){
     const NamePicture = userName
                        .trim()
                        .toUpperCase()
                        .split(" ")
                        .map(word=>word[0]);
      const avatarText = NamePicture.length > 1 ?
                        NamePicture[0] + NamePicture[NamePicture.length -1]
                        : NamePicture[0] || "?";
 
     return (
          <div className="w-8 h-8 bg-blue-600 flex justify-center items-center rounded-full">
               <p className="text-[12px] font-semibold">{avatarText}</p>
          </div>
     )
}
