import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './home'
import Skills from './skills'
import Project from './Project'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Contact from './contact'
import { Link } from 'react-router-dom'
import Glitter from './Glitter'
import Projectlist from './projectlist'
import Contact_data from './contact_data'

function App() {
  

  return (
  <>
  <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
    <Glitter />
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projectlist/>} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact_data />} />
      </Routes>
    </div>
  </div>


  </>
      


    
   
   
    
  
    
    

  )
}

export default App
