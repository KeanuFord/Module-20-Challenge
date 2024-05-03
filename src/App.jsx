import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './pages/aboutme.jsx';
import Portfolio from './pages/portfolio.jsx';
import ContactMe from './pages/contactme.jsx';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact-me' element={<ContactMe />} />
        </Routes> 
      </Router>
      <div>
        <h1>Welcome to my website</h1>

      </div>
    </>
  )
}

export default App
