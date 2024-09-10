import './App.css'
import UserCard from './component/UserCard'
import userImage from './assets/user-image.png';
function App() {

  return (
    <div className='container'>
    {/* <h1>Hello This is my first react project</h1> */}
    <UserCard name="Abdul Haseeb" subTitle="Software Developer" userImage={userImage}/>
    <UserCard name="Abdul Haseeb" subTitle="Full Stack Developer" userImage={userImage}/>
    <UserCard name="Abdul Haseeb" subTitle="Front-End-Developer" userImage={userImage}/>
    </div>
  )
}

export default App
