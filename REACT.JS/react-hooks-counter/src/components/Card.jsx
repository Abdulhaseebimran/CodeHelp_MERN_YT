/* eslint-disable react/prop-types */
import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" placeholder='search' onChange={(e) => props.setName(e.target.value)}/>
        <h1>Card value for searching... child components {props.name} and Title {props.title}</h1>
    </div>
  )
}

export default Card