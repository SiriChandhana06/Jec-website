import Jeclogo from '../assets/jeclogo.png';
import { Button, Footer } from 'flowbite-react';
import { BsYoutube, BsFacebook,BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

function myFooter() {
  const date = new Date();
const year = date.getFullYear();
  return (
    <Footer  className='bg-blue-400 rounded-none'>
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
          
          <div className="flex justify-around">
            <div>
              <Footer.Title title="Quick Links" className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">CEO</Footer.Link>
                <Footer.Link href="#">Academic</Footer.Link>
                <Footer.Link href="#">Department</Footer.Link>
                <Footer.Link href="#">Placement</Footer.Link>
                <Footer.Link href="#">Facilities</Footer.Link>
                <Footer.Link href="#">Club</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
           
            <span className="self-center whitespace-nowrap flex flex-col justify-center items-center ml-2 md:ml-8"><span className='text-blue-700 text-lg font-bold xl:text-4xl sm:text-3xl'>JAYA ENGINEERING COLLEGE</span> <span className='text-sm font-semibold text-black mt-1  text-wrap text-center'>Approved by AICTE, New Delhi | Affiliated to Anna University , Chennai</span> <span className='text-sm font-semibold text-black'>A Telugu Minority Institute</span>
        </span>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Courses" className='text-white'/>
              <Footer.LinkGroup col>
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
        <div className="w-full sm:flex sm:items-center sm:justify-between mb-4">
          <Footer.Copyright href="#" className='text-white text-lg' by="Jaya Engineering College. All Rights are Reserved" year={year}  />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsTwitter} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsLinkedin} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsYoutube} style={{ color: 'white', height: '20px', width: '20px' }} />
            <Footer.Icon href="#" icon={BsInstagram} style={{ color: 'white', height: '20px', width: '20px' }} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default myFooter;