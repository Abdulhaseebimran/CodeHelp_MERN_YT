/* eslint-disable react/prop-types */
import React from 'react';

const Button = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.handleClick} >
        {props.text}
      </button>
    </div>
  )
}

export default Button
