import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    function Increment() {
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
  return (
    <div className='counter-container'>
      <p id='para'>You Have Clicked {count} Times</p>
        <button id='button' onClick={() => {Increment()}}>Increase Me</button>
        <button id='button' onClick={() => {decrement()}}>Decrease Me</button>
    </div>
  )
}

export default Counter
