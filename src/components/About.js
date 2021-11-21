import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return <>
    <main>
      <h1>About</h1>
    </main>

    <nav>
      <Link to='/'><h2>Go Back to Home</h2></Link>
    </nav>
  </>
}

export default About
