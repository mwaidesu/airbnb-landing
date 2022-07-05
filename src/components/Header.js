import React from 'react'
import logo from '../images/airbnb1.png'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="logo" />
      </nav>
    </div>
  )
}

export default Header