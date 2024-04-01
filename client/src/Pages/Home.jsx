import React, { useState } from 'react';
import { Carousel,Button,List,Accordion } from 'flowbite-react';
import Jec1 from '../assets/jec1.png'
import Jec2 from '../assets/jec2.png'
import Course1 from '../assets/Course1.png'
import Course2 from '../assets/Course2.png'
import Chairman from '../assets/Chairman.png'
import Openq from '../assets/Openq.png'
import Closeq from '../assets/Closeq.png'
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'



export default function Home() {
  const [showDetails1, setShowDetails1] = useState(false);
  return (
    <div className=''>

    
    <div className="h-96">
      <Carousel>
        <img src={Jec1} alt="..." />
        <img src={Jec2} alt="..." />

      </Carousel>
     
    </div>

    <div className='mb-3'>
<h1 className='text-xl md:text-2xl font-semibold text-gray-700 text-center mt-6'>A Journey of Thousand Miles Begins with a Single Step</h1>
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

      <Carousel className='w-96 min-h-96 border-b-2 border-l-2 border-r-2' indicators={false}>
        <div className='flex flex-col justify-center items-center p-3'>
        <img src={Course1} alt="..." />
          <h1 className='text-black text-center text-md font-medium mt-3'>Electrical & Electronical Engineering</h1>
          <List className='mt-2 flex flex-col gap-2 text-justify p-2'>
          <List.Item className='text-black text-sm '>Regular industrial Visit to Core Industries and field visit to TNEB and treatment plants.</List.Item>
          <List.Item className='text-black text-sm '>Well equipped and sophisticated fully functional laboratories.</List.Item>
          </List>
          <div className=' mb-2'>
          <Button color="blue" pill>View More</Button>
          </div>
        </div>
        
      </Carousel>
</div>
      
      <div>

      <Carousel className='w-96 min-h-96 border-b-2 border-l-2 border-r-2 ' indicators={false}>
        <div className='flex flex-col justify-center items-center p-3'>
        <img src={Course2} alt="..." />
          <h1 className='text-black text-center text-md font-medium mt-3'>Master of Computer Application</h1>
          <List className='mt-2 flex flex-col gap-2 p-2'>
          <List.Item className='text-black text-sm '>The department offers three year MCA Course. It has a team of highly qualified.</List.Item>
          <List.Item className='text-black text-sm '>Well equipped laboratories and dedicated,motivated faclty.</List.Item>
          </List>
          <div className=' mb-2'>
          <Button color="blue" pill>View More</Button>
          </div>
        </div>
        
      </Carousel>
      </div>
      
    </div>


    <div className='flex justify-center gap-14 mt-10 border border-t-2 border-b-2 p-4 flex-wrap'>

    <div className='flex flex-col text-center text-nowrap  w-80 '>
    <h1 className='text-blue-800 font-medium'>Our Track Record</h1>
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

 
<div className='w-full  flex justify-center items-center mb-16 mt-16'> 

<div className='w-full md:w-4/5 border border-b-2 border-t-2'>
<h1 className='text-xl font-bold mt-1 ml-2'>Chairman’s Message</h1>
<div style={{ display: 'flex', justifyContent: 'center' }} className='mt-4'>
  <hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}  />
</div>

<div className='w-full justify-center items-center mt-4'>


<div className='flex flex-col justify-center items-center gap-6  xl:flex-row mb-2'>
  <div>

<img src={Chairman} alt="" />
  </div>

  <div>
  <div className='flex gap-6'>
  <img src={Openq} alt="" className='h-16 w-16' />
  <div className='flex flex-col'>

  <span className='text-blue-700 font-semibold text-lg'>
  “Count your chick before it hatches”
  </span>
  <span className='text-justify'>
says an old Adage. Our JAYA ENGINEERING COLLEGE is gearing-up such skills to the budding Engineers. In this wide arena of competition, we would like to enable Engineering aspirants with more calibers and more innovation.
  </span>
  <span className='t text-right mt-3 lg:mt-6 text-md font-medium'>
  -Prof.A. Kanagaraj M.A., M.Phil.
  </span>
  </div>
  <img src={Closeq} alt="" className='h-16 w-16' />
</div>
  </div>

</div>
</div>
</div>

</div>

<div className='w-full flex justify-center flex-wrap gap-10 '>
<div  className='w-full sm:w-3/4 lg:w-2/5'>

<Accordion collapseAll className=''>
      <Accordion.Panel>
        <Accordion.Title className=''>About Jaya Engineering College?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Jaya Engineering College (JEC) is an ISO 9001:2000 certified institution founded in the year 1995 with a focus on technological innovation, entrepreneurship and character building to the students.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=''>Placement?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=''>Entrepreneurship?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
</div>

<div className='w-full sm:w-3/4 lg:w-2/5 border'>

  <h1 className='text-white text-xl font-normal bg-blue-700 text-center p-5'>
  Latest Announcements
  </h1>
<h2 className='text-blue-700 font-medium text-center mt-3 mb-2'> 
  March 2024
</h2>
<div className='flex flex-col justify-center'>

<p className='text-center text-wrap'>
JEC-Placement organize “Training-AMCAT on 7-3-2024 at 
</p>
<span className='text-center'>10.30am in CSE Smart class</span>
</div>
<div className='w-full flex justify-center mt-2'>

<hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}  />
</div>

<h2 className='text-blue-700 font-medium text-center mt-3 mb-2'> 
  March 2024
</h2>
<div className='flex flex-col justify-center'>

<p className='text-center text-wrap'>
JEC NSS-Woman Empowerment cell organize “International Womens day 
</p>
<span className='text-center'>on 8-3-2024 in JEC Auditorium</span>
</div>
<div className='w-full flex justify-center mt-2'>

<hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}  />
</div>

<h2 className='text-blue-700 font-medium text-center mt-3 mb-2'> 
  March 2024
</h2>
<div className='flex flex-col justify-center'>

<p className='text-center text-wrap'>
JEC MOU Signing ceremony -CZend, Cryffindors, Truffles, 
</p>
<span className='text-center'>Zeit in CSE Smart class on 8-3-2024.</span>
</div>
<div className='w-full flex justify-center mt-2'>

<hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}  />
</div>

<h2 className='text-blue-700 font-medium text-center mt-3 mb-2'> 
  Jan 2024
</h2>
<div className='flex flex-col justify-center'>

<p className='text-center text-wrap'>
JEC Participated in one day training for students 
</p>
<span className='text-center'>mentors- Niral Thiruvizha Hackathon.</span>
</div>
<div className='w-full flex justify-center mt-2'>

<hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}  />
</div>


</div>
</div>


<div className='w-full  flex justify-center items-center flex-wrap gap-3 lg:gap-8 mt-9 mb-9 xl:gap-16'>
<div><img src={Img1} alt="" className='w-72 h-72 ' /></div>
<div><img src={Img2} alt="" className='w-72 h-72 ' /></div>
<div><img src={Img3} alt="" className='w-72 h-72 ' /></div>

</div>

    </div>
  )
}
