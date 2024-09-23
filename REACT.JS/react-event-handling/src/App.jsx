import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    alert('Button Clicked')
  }

  function mouseOver(){
    alert('Mouse Over')
  }

  function changeValue(e){
    console.log("Updated Values: " + e.target.value)
  }

  function handleSubmit (e){
    e.preventDefault();
    alert('Form Submitted');
  }
  return (
    <div>
     
     <button onClick={() => alert("Immedaite Invoke")}>
      CLick Me
     </button>
     {/* <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeValue} placeholder='enter values'/>
      <button type='submit'>Submit</button>
     </form> */}
     {/* <button onMouseOver={mouseOver}>Mouse Over</button>
     <button onClick={handleClick}>Click Me</button> */}
    </div>
  )
}

export default App
