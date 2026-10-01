import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero';
import About from './Component/About';
import Work from './Component/Work';
import Contact from './Component/Contact';

function App() {


  return (
    <>
   <Navbar />
   <Hero  />
   <About />
   <Work />
   <Contact />
   </>
  
  )
}

export default App
