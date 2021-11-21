import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Info from './components/Info'

function App() {
  return <>
    <main>
      <h1>Setup React Javascript Webpack</h1>
    </main>
    <nav>
      <ul>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="about"><h2>About</h2></Link>
        <Link to="info"><h2>Info</h2></Link>
      </ul>
    </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
    </Routes>
  </>
}

export default App
