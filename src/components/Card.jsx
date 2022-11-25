import React from 'react';
import "./assets/Card.css";

const Card = (props) => {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Card