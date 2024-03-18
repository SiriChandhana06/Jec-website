import { Navbar,Dropdown,Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar  >
      <div className='flex flex-wrap justify-center items-center w-full' >

      
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
    </Navbar>
  );
}
export default Header;