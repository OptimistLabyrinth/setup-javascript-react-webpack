import React, { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(prev => prev + 1)
  }

  function decrementCount() {
    setCount(prev => prev - 1)
  }

  function resetCount() {
    setCount(0)
  }

  return <>
    <main>
      <h1>Home</h1>
    </main>

    <section>
      <h3>Cout: {count}</h3>
      <button onClick={() => incrementCount()}>increment count</button>
      <button onClick={() => decrementCount()}>decrement count</button>
      <button onClick={() => resetCount()}>reset count</button>
    </section>
  </>
}

export default Home
