import React, { useState } from 'react';
import { Navbar,Dropdown,Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Test() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className=" mx-auto ">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center">
            
            <div className="hidden xl:block ">
              <div className=" flex ">
              <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>Home</Link></Button>
        

        <div>
        <Dropdown label="About JEC" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>

        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>COE</Link></Button>
     

        <div>
        <Dropdown label="Academic" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
        
        <div>
        <Dropdown label="Department" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
        
        <div>
        <Dropdown label="Placement" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>R</Link>R & D</Button>
                
        <div>
        <Dropdown label="Facilities" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <div>
        <Dropdown label="Accrediation" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <div>
        <Dropdown label="Clubs" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>IQAC</Link></Button>

        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>Contact Us</Link></Button>
        
              </div>
            </div>
          </div>
          <div className="-mr-2 flex xl:hidden">
            <button 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" 
              aria-controls="mobile-menu" 
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Heroicon name: menu */}
              <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              {/* Heroicon name: x */}
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>Home</Link></Button>
        

        <div>
        <Dropdown label="About JEC" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>

        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>COE</Link></Button>
     

        <div>
        <Dropdown label="Academic" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
        
        <div>
        <Dropdown label="Department" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
        
        <div>
        <Dropdown label="Placement" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>R</Link>R & D</Button>
                
        <div>
        <Dropdown label="Facilities" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <div>
        <Dropdown label="Accrediation" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <div>
        <Dropdown label="Clubs" outline color='white' dismissOnClick={false} style={{ backgroundColor: 'white', color: 'black', border: 'none'}} >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Messages</Dropdown.Item>
            <Dropdown.Item>Governing Body</Dropdown.Item>
            <Dropdown.Item>RTI</Dropdown.Item>
            <Dropdown.Item>Group of Institute</Dropdown.Item>
            <Dropdown.Item>Governing</Dropdown.Item>
            <Dropdown.Item>HOD's</Dropdown.Item>
            <Dropdown.Item>Stationary Bodies</Dropdown.Item>
        </Dropdown>
        </div>
 
        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>IQAC</Link></Button>

        <Button outline color='white' style={{ backgroundColor: 'white', color: 'black', border: 'none'}}><Link to='/'>Contact Us</Link></Button>
        
        </div>
      </div>
    </nav>
  );
}

export default Test;
