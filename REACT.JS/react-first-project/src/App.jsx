/* eslint-disable react/no-children-prop */
import React, {useState} from 'react'
import './App.css'
import UserCard from './component/UserCard'
import userImage from './assets/user-image.png';
import Card from './component/Card';
import Button from './component/Button';
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log('Button is clicked');
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className='container'>
    {/* <h1>Hello This is my first react project</h1> */}
    <UserCard name="Abdul Haseeb" subTitle="Software Developer" userImage={userImage}/>
    <UserCard name="Abdul Haseeb" subTitle="Full Stack Developer" userImage={userImage}/>
    <UserCard name="Abdul Haseeb" subTitle="Front-End-Developer" userImage={userImage}/>
    
    {/* <Button handleClick={handleClick} text="Click ME!">
        <h1>Count: {count}</h1>
      </Button>
      <Button handleClick={decrease} text="CLICK ME!">
        <h1>Count: {count}</h1>
      </Button> */}

    {/* <Card name="Abdul Haseeb">
     <h1>Hello Jee this is card heading</h1>
     <p>Learning Web Development</p>
    </Card>
    <Card children="This is children">
    </Card> */}
    </div>
  )
}

export default App
