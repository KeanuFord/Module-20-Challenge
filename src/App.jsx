import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/index.jsx';
import Portfolio from './pages/Portfolio/index.jsx';
import ContactMe from './pages/ContactMe/index.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about-me' element={AboutMe} />
          <Route path='/portfolio' element={Portfolio} />
          <Route path='/contact-me' element={ContactMe} />
        </Routes> 
      </Router>
      <div>
        <a href="https://vitejs.dev" target="_blank">

        </a>
        <a href="https://react.dev" target="_blank">

        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
