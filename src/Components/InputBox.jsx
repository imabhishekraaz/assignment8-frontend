import { IonIcon } from '@ionic/react'
import React from 'react'

const InputBox = ({placeHolder, value,onChange, icon, type}) => {
  return (
    <div className='flex flex-row gap-2 items-center px-2 py-3'>
        <IonIcon 
            className='w-5 h-5'
            icon={icon}
            />
        <input 
            type={type}
            placeholder={placeHolder} 
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className='border-0 outline-0'
        />
    </div>
  )
}

export default InputBox