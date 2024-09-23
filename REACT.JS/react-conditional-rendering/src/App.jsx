import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(true);

 if (!isLoggedIn) {
   return (
     <LoginBtn />
   )
 }
 return(
   <div>
    <h1>Hello welcome everyone to our Login Page</h1>
    <div>
      {/* {isLoggedIn ? <LogoutBtn /> : <LoginBtn />} */}
      {isLoggedIn && <LogoutBtn />}
    </div>
   </div>
 )
//  if (isLoggedIn) {
//    return(
//     <LoginBtn />
//    )
//  } else{
//     return(
//       <LogoutBtn />
//     )
//  }
}

export default App
