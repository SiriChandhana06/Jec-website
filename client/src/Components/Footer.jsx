import Jeclogo from '../assets/jeclogo.png';
import { Button, Footer } from 'flowbite-react';
import { BsYoutube, BsFacebook,BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

function myFooter() {
  const date = new Date();
const year = date.getFullYear();
  return ( 
    <Footer  className='bg-blue-400 rounded-none w-full'>
      <div className="w-full">
        <Button color='blue'  className='ml-auto rounded-none focus:outline-none'>Admission Open {year} </Button>
      <div className='w-full flex justify-center '>

        <div>

            <Footer.Brand
              // href="https://flowbite.com"
              src={Jeclogo}
              alt="..."
              name="Jaya Engineering College"
              className='h-36 w-36 md:w-36 md:h-w-36 rounded-full'
            />
        </div>
          </div>


        <div className="mt-10 ">
          
          <div className="flex flex-wrap justify-center  lg:gap-24 xl:gap-40">
            <div className='mb-7'>
              <Footer.Title title="Quick Links" className='text-white ml-4' />
              <Footer.LinkGroup  className='text-black font-medium flex justify-center lg:flex-col lg:justify-start lg:items-start'>
                <Footer.Link href="">About</Footer.Link>
                <Footer.Link href="">CEO</Footer.Link>
                <Footer.Link href="">Academic</Footer.Link>
                <Footer.Link href="">Department</Footer.Link>
                <Footer.Link href="">Placement</Footer.Link>
                <Footer.Link href="">Facilities</Footer.Link>
                <Footer.Link href="">Club</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
           
            <span className="self-center whitespace-nowrap flex flex-col justify-center items-center ml-2 md:ml-8"><span className='text-blue-700 text-lg font-bold xl:text-4xl sm:text-3xl'>JAYA ENGINEERING COLLEGE</span> <span className='text-sm font-semibold text-black mt-1  text-wrap text-center'>Approved by AICTE, New Delhi | Affiliated to Anna University , Chennai</span> <span className='text-sm font-semibold text-black'>A Telugu Minority Institute</span>
        </span>

<div className='flex justify-center items-center flex-col mt-4 self-center text-center'>
  <span>CTH Road, Prakash Nagar, Thiruninravur, Chennai, Tamil Nadu 602024</span>
  <span>Phone : 044-26300982, 26341264, 26390041.</span>
  <span>Email : <a href="mailto:admission@jec.ac.in" className='text-md font-semibold text-blue-700'>admission@jec.ac.in</a>, <a href="mailto:info@jec.ac.in" className='text-md font-semibold text-blue-700'>info@jec.ac.in</a></span>
  <span>Group Website : <a href="http://www.jayagc.org/" className='text-md font-semibold text-blue-700'> www.jayagc.org</a> | Fax: +91-44-5212 3995</span>
</div>

              <Footer.LinkGroup col className='mt-5'>
              <div className=" flex space-x-6 sm:mt-0 justify-center">
            <Footer.Icon href="#" icon={BsFacebook} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsTwitter} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsLinkedin} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsYoutube} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsInstagram} style={{ color: 'white', height: '20px', width: '20px' }} />
          </div>
              </Footer.LinkGroup>
            </div>
            <div >
              <Footer.Title title="Courses" className='text-white  mt-4 lg:mt-0 ml-4'/>
              <Footer.LinkGroup  className='text-black font-medium flex lg:flex-col lg:justify-start lg:items-start  justify-center items-center gap-3'>
                <Footer.Link href="#">B.E Computer Science</Footer.Link>
                <Footer.Link href="#">B.Tech IT</Footer.Link>
                <Footer.Link href="#">B.E ECE</Footer.Link>
                <Footer.Link href="#">B.E EEE</Footer.Link>
                <Footer.Link href="#">B.E Aerounatics</Footer.Link>
                <Footer.Link href="#">B.E Textile</Footer.Link>
                <Footer.Link href="#">View More</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>




        <Footer.Divider />
        <div className="w-full flex justify-center items-center mb-4 ">
          <Footer.Copyright href="#" className='text-white text-md lg:text-lg text-center' by="Jaya Engineering College. All Rights are Reserved" year={year}  />
          
        </div>
      </div>
    </Footer>
  );
}
export default myFooter;