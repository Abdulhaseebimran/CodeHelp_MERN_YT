/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import userImage from '../assets/user-image.png';
import './UserCard.css';

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='title'>{props.name}</p>
      <img src={props.userImage} alt="user-image" id='user-image'/>
      <p id='subtitle'>{props.subTitle}</p>
    </div>
  )
}

export default UserCard
