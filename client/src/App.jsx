import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Subheader from './Components/Subheader';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';



export default function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Header/>
       <Subheader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  )
}
