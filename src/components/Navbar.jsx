import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/quiz-logo.svg"
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
    <Link to="/">
      <img className='notes-logo' src={logo} alt="notes-logo" />
    </Link>
  </nav>
  )
}

export {Navbar};