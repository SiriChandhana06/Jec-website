import React from 'react'

export default function Subheader() {
  return (
    <div className='w-full border border-t-2 border-b-2  flex justify-between mb-3'>
        <div className='bg-gray-300 p-3 text-nowrap'> News and Event</div>
        <div className='p-2 w-full'><marquee behavior="scroll" direction="left" className='text-lg text-red-600 font-bold'>Admissions For B.E & B.Tech Students 2024</marquee></div>
        
    </div>
  )
}
