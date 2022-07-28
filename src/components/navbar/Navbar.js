import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to='/music'>Music</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to='/search'>Search</Link>
  </li>
  </ul>  
    </nav>
  )
}

export default Navbar
