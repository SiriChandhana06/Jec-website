import React from 'react'
import { Carousel,Button,List } from 'flowbite-react';
import Jec1 from '../assets/jec1.png'
import Jec2 from '../assets/jec2.png'
import Course1 from '../assets/Course1.png'
import Course2 from '../assets/Course2.png'



export default function Home() {
  return (
    <div className=''>

    
    <div className="h-96">
      <Carousel>
        <img src={Jec1} alt="..." />
        <img src={Jec2} alt="..." />

      </Carousel>
     
    </div>

    <div>
<h1 className='text-xl md:text-2xl font-semibold text-blue-700 text-center mt-6'>A Journey of Thousand Miles Begins with a Single Step</h1>
    </div>

    <div>
    <span className="self-center whitespace-nowrap flex flex-col justify-center items-center ml-2 md:ml-8"><span className='text-blue-700 text-2xl font-extrabold xl:text-6xl sm:text-4xl'>JAYA ENGINEERING COLLEGE</span> <span className='text-lg font-semibold text-black mt-1  text-wrap text-center'>Approved by AICTE, New Delhi | Affiliated to Anna University , Chennai</span> 
        </span>
    </div>

<div className='w-full flex justify-center items-center mt-8 p-3'>
<div className='w-full lg:w-4/5 '>
    <List className='text-black text-justify flex flex-col gap-6'>
      <List.Item className='text-black text-md' >Jaya Engineering College (JEC) is an ISO 9001:2000 certified institution founded in the year 1995 with a focus on technological innovation, entrepreneurship and character building to the students. The college offers 9 UG courses and 7 PG courses. JEC is Affiliated to Anna University, Chennai and approved by AICTE, New Delhi. The college management team consists of well-experienced and committed Academicians and Administrators.</List.Item>
      <List.Item className='text-black text-md text-justify' >Situated close to the Chennai Metropolis, the college is one of the foremost centres of graduate and professional education in the state of Tamilnadu. The range and depth of resources at the college have few peers. </List.Item>
      
    </List>
    </div>
</div>
    
    <div>
      <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-bold mb-9'>Explore JEC Courses</h1>
    </div>


    <div className=" flex justify-around flex-wrap gap-6">
<div className=''>

      <Carousel className='w-96 h-96 border-b-2 border-l-2 border-r-2' indicators={false}>
        <div className='flex flex-col justify-center items-center'>
        <img src={Course1} alt="..." />
          <h1 className='text-black text-center text-md font-medium mt-3'>Electrical & Electronical Engineering</h1>
          <List className='mt-2 flex flex-col gap-2 text-justify'>
          <List.Item className='text-black text-sm '>Regular industrial Visit to Core Industries and field visit to TNEB and treatment plants.</List.Item>
          <List.Item className='text-black text-sm '>Well equipped and sophisticated fully functional laboratories.</List.Item>
          </List>
          <div className=' '>
          <Button color="blue" pill>View More</Button>
          </div>
        </div>
        
      </Carousel>
</div>
      
      <div>

      <Carousel className='w-96 h-96 border-b-2 border-l-2 border-r-2' indicators={false}>
        <div className='flex flex-col justify-center items-center'>
        <img src={Course2} alt="..." />
          <h1 className='text-black text-center text-md font-medium mt-3'>Master of Computer Application</h1>
          <List className='mt-2 flex flex-col gap-2'>
          <List.Item className='text-black text-sm '>The department offers three year MCA Course. It has a team of highly qualified.</List.Item>
          <List.Item className='text-black text-sm '>Well equipped laboratories and dedicated,motivated faclty.</List.Item>
          </List>
          <div className=' '>
          <Button color="blue" pill>View More</Button>
          </div>
        </div>
        
      </Carousel>
      </div>
      
    </div>


    <div className='flex justify-center gap-14 mt-10 border border-t-2 border-b-2 p-4 flex-wrap'>

    <div className='flex flex-col text-center text-nowrap  w-80 '>
    <h1 className='text-blue-900 font-medium'>Our Track Record</h1>
    <span className='text-black font-normal'>The finest performance by our graduates.</span>
  </div>

<div className='flex flex-col text-center text-nowrap   w-32'>
  <span className='text-black text-lg font-semibold'>34,500</span>
  <span className='text-black text-lg font-semibold'>Active Learners</span>
</div>

<div className='flex flex-col text-center text-nowrap   w-32'>
  <span className='text-black text-lg font-semibold'>INR 25 LPA
</span>
  <span className='text-black text-lg font-semibold'>Highest Salary</span>
  <span className='text-black text-lg font-semibold'> Offered</span>
</div>

<div className='flex flex-col text-center text-nowrap   w-32'>
  <span className='text-black text-lg font-semibold'>52%
 </span>
  <span className='text-black text-lg font-semibold'>Average Salary</span>
  <span className='text-black text-lg font-semibold'>Hike</span>
</div>

<div className='flex flex-col text-center text-nowrap   w-32'>
  <span className='text-black text-lg font-semibold'>300+

 </span>
  <span className='text-black text-lg font-semibold'>Hiring Partners</span>
</div>

    </div>

    </div>
  )
}
