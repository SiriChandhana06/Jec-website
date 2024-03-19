import React, { useState, useEffect } from 'react';import Jeclogo from '../assets/jeclogo.png';
import Navicon1 from '../assets/navicon1.png';
import Navicon2 from '../assets/navicon2.png';

function myNavbar() {
  const date = new Date();

// Get the current year
const year = date.getFullYear();
  return (
    <div>
      <div className='w-full flex flex-wrap justify-around items-center mt-2 gap-2 '>
        
      <div className='flex flex-row sm:gap-10  lg:gap-2'>
        <img src={Jeclogo} className="md:ml-10 h-16 w-16 md:w-24 md:h-24" alt="Jec Logo" />
        <span className="self-center whitespace-nowrap flex flex-col justify-center items-center ml-2 md:ml-8"><span className='text-blue-700 text-lg font-bold xl:text-4xl sm:text-3xl'>JAYA ENGINEERING COLLEGE</span> <span className='text-sm font-semibold text-black mt-1  text-wrap text-center'>Approved by AICTE, New Delhi | Affiliated to Anna University , Chennai</span> <span className='text-sm font-semibold text-black'>A Telugu Minority Institute</span>
        </span>
      </div>

      <div className=' flex flex-row items-center gap-1 mt-4 xl:mt-0 sm:gap-16 md:gap-24 lg:gap-10'>
        <div><img src={Navicon1} alt="" className='h-16 w-16 md:w-24 md:h-24'/></div>
        <div><img src={Navicon2} alt="" className='h-16 w-16 md:w-24 md:h-24'/></div>
        <div className='bg-blue-400 flex flex-col justify-center items-center p-3 rounded-full h-16 w-16 md:w-20 md:h-20'><span className=' text-black font-semibold text-sm text-center' >TNEA Code</span><span className='text-md  font-semibold text-white'>1106</span> </div>
        <div><button  className='rounded-full xl:ml-8 bg-blue-600 text-sm text-white p-3 hover:bg-blue-700 font-semibold '>Admission {year}</button></div>
      </div>

</div>
<div style={{ display: 'flex', justifyContent: 'center' }} className='mt-6'>
  <hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '100%' }}  />
</div>
</div>

  );
}
export default myNavbar;