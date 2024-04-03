import React from 'react'
import { List } from "flowbite-react";
import CoeImg1 from '../assets/CoeImg1.png';
import CoeImg2 from '../assets/CoeImg2.png';
import CoeImg3 from '../assets/CoeImg3.png';
import CoeImg4 from '../assets/CoeImg4.png';
import CoeImg5 from '../assets/CoeImg5.png';
import CoeImg6 from '../assets/CoeImg6.png';
import CoeImg7 from '../assets/CoeImg7.png';
import CoeImg8 from '../assets/CoeImg8.png';
import Principal from '../assets/Principal.png';
import VicePrincipal from '../assets/VicePrincipal.png';

export default function Coe() {
  return (
    <div className='w-full flex justify-center mt-20 mb-20'>
        <div className='w-full md:w-4/5 sm:w-11/12  shadow-lg border-2'>
            <h1 className='text-2xl font-semibold text-black mt-8 ml-10'>CENTERS OF EXCELLENCE (CoE)</h1>
            <div className='w-full flex justify-center  self-center mt-6'>
            <hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}/>
            </div>

            <div className='w-full flex justify-center mt-6 mb-16'>
            <div className='w-4/5 flex flex-col justify-center gap-6'>
                <p>Jaya Group of Institutions has established Centers of Excellence (CoE) in various emerging technologies for the benefit of students. The CoEs are the lab facilities for students to develop practical skills in emerging technologies of ‘content beyond syllabus’ and become more industry ready to join the industry working on emerging technologies.</p>
                <p>The CoEs provide facilities for students to develop projects and to participate in student competitions conducted by Government and reputed private organizations. They also provide facilities for students to develop innovative products and develop skills in Innovation and Entrepreneurship leading them to establish start up companies.</p>
                <p>The CoEs also act as Research Labs where students and faculty members can conduct research especially in emerging technologies and publish research papers in conferences and journals. Some research work can be filed for Intellectual Property Rights (IPR) like patents, copyrights etc.</p>
            </div>
            </div>

            <div className='w-full flex justify-center mb-16'>
                <div className='w-4/5 flex flex-wrap justify-center gap-10 '>

                <div className='flex justify-center items-center gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg1} alt="" className='w-60 h-40' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>Artificial Intelligence and Data Science (AI & DS)</h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg2} alt="" className='w-60 h-48' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>CoE for 3D Printing</h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg3} alt="" className='w-60 h-48' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>Cyber Security </h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg4} alt="" className='w-60 h-40' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>eYantra Lab: Embedded Systems and Robotics</h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg5} alt="" className='w-60 h-40' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>Free and Open-Source Software (FOSS) Centre</h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg6} alt="" className='w-60 h-48' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>Full Stack Engineering</h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg7} alt="" className='w-60 h-40' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>Research Center for IC Engine</h1>
                </div>

                <div className='flex justify-center  gap-3 flex-col w-60 h-48'>
                    <img src={CoeImg8} alt="" className='w-60 h-40' />
                    <h1 className='text-sm  text-blue-700 font-semibold text-center'>Textile Innovation Centre</h1>
                </div>

                </div>
            </div>


            <h1 className='text-2xl font-semibold text-black mt-8 ml-10'>RIGHT TO INFORMATION (RTI)</h1>
            <div className='w-full flex justify-center  self-center mt-6'>
            <hr style={{ color: 'grey', backgroundColor: 'grey', height: 2, width: '80%' }}/>
            </div>

            <div className='w-full flex justify-center mt-6 mb-16'>
            <div className='w-4/5 flex flex-col justify-center gap-6'>
                <p>Section 4(1)(b) of RTI Act 2005 covers the statutory declaration of JAYA Engineering College Website. It covers all the rules and regulations which are implemented by Govt. of Tamil Nadu.</p>
                <p>Our College is a “College of co- education”, which is registered under society act by Govt. of Tamil Nadu and affiliated to Anna University, Chennai, Tamil Nadu. The College has a Governing Body which is approved by the authority appointed by Govt. of Tamil Nadu. It runs as per rules and regulations made by the Govt. from time to time.</p>
                <p>The College comes under “Private –Self Financing” category and therefore which financial transactions are audited by the private auditors. The College has different Bodies to maintain all types of disciplines in the campus.</p>
                <p>All the cells or committees of the institution are under Statutory Bodies and comes under section 4(1)(b) of RTI Act 2005. The applications under the RTI Act along with a postal order/demand draft for Rs.10.00 obtained in favour of Principal, JAYA Engineering College may be sent to the Public Information Officer (PIO) or handed over in his office. All information about the college under Section 4(1)(b) of RTI Act 2005 are open for the public and it can be obtained by a citizen of India.</p>
            </div>
            </div>

 
            <h1 className='text-2xl font-semibold text-black mt-8 ml-10 underline mb-9'>Public Information Officers</h1>

<div className='w-full flex flex-col justify-start gap-10 mb-16'>
    <div className='flex sm:ml-5 md:ml-10 lg:ml-20 gap-6 items-center'>
        <div><img src={Principal} alt="" /></div>
        <div>
            <List unstyled className='text-black font-medium text-md'>
      <List.Item>Name : Dr. K.L. Shunmuganathan</List.Item>
      <List.Item>Designation : Principal</List.Item>
      <List.Item>Mail-id : principal@jec.ac.in</List.Item>
    </List> </div>
    </div>
    <div className='flex sm:ml-5 md:ml-10 lg:ml-20 gap-6 items-center'>
        <div><img src={VicePrincipal} alt="" /></div>
        <div>
            <List unstyled className='text-black font-medium text-md'>
      <List.Item>Name : Dr.S.Rajendran</List.Item>
      <List.Item>Designation : Vice Principal</List.Item>
      <List.Item>Contact : 9551329915</List.Item>
      <List.Item>Mail-id : vp@jec.ac.in</List.Item>
    </List> </div>
    </div>

</div>
            
        </div>

    </div>
  )
}
