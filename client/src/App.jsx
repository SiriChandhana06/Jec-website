import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Subheader from './Components/Subheader';
import Home from './Pages/Home';



export default function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Header/>
       <Subheader/>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
    </BrowserRouter>
    
  )
}
