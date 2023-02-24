import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components.css";

function EmptyValue() {
  return (
    <div className='screen-container'>
        <div className='dialog-container flex flex-col items-center justify-center p-8 border-5'>
            <h4 className='dialog-text'>Please Select the category!</h4>
            <Link to="/category"><button className='dialog-btn'>OK</button></Link>
        </div>
    </div>
  )
}

export {EmptyValue};