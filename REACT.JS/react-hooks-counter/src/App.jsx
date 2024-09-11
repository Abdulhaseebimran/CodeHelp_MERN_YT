import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Card from './components/Card'

function App() {
  // creating state
  const [name, setName] = useState("");
  // manage state
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // }
  // changed state
  // const handleClick = () => {
  //   setName("Hello World");
  // }

  return (
    <>
     <Counter/>
     {/* <Card name={name} setName={setName} title="Card1"/>
      <h1>App value for searching... parent components {name}</h1> */}
    </>
  )
}

export default App
