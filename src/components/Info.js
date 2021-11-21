import React from 'react'
import { Link } from 'react-router-dom'

function Info() {
  return <>
    <main>
      <h1>Info</h1>
    </main>

    <nav>
      <Link to='/'><h2>Go Back to Home</h2></Link>
    </nav>
  </>
}

export default Info
