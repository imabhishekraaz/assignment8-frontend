import React from 'react'

const Error = ({error}) => {
  return (
    <>
    {/* Display the Error   */}
        <div>
            { error && (
                <div className='fixed flex w-full h-auto justify-center items-center pt-15'>
                    <p className=' text-red-500'>{error}</p>
                </div>
            )}
        </div>
    </>
  )
}

export default Error