import React from 'react'

const Button = ({ name, onClick }) => {
    return (
        <>
            <button
                className='w-[inherit] text-white font-semibold bg-inherit rouneded-[inherit] border-inherit outline-0 h-[inherit]'
                onClick={() => onClick()}
            >{name}</button>
        </>
    )
}

export default Button