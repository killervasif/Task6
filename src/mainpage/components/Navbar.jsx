import React from 'react'

function Navbar({ email, setAuthorized }) {
  return (
    <div className='w-full h-auto sm:h-[100px] bg-zinc-300 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-10'>
      <label className='text-xl my-2 sm:my-0 font-bold'>{email}</label>
      <button
        onClick={() => setAuthorized(false)}
        className='text-xl font-bold rounded-[7px] mb-4 sm:mb-0 h-2/4 px-6 sm:px-10 py-2 sm:py-0 bg-[#f6b819] hover:bg-yellow-700'>Log out</button>
    </div>
  )
}

export default Navbar