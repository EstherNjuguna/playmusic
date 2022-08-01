import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/music'>Music</Link>
  </li>
  {/* <li className="nav-item">
    <Link className="nav-link" to='/dropdown'>DropDown</Link>
  </li> */}
  <li className="nav-item">
    <Link className="nav-link" to='/about'>About</Link>
  </li>
  </ul>  
    </nav>
  )
}

export default Navbar
