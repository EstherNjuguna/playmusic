

import React from "react";

import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
//import { Link } from "react-router-dom";
export default function Footer() {
  return (
    //<nav class="navbar navbar-expand-lg bg-info">
    //<div className="container-fluid">
      
      //<ul className="nav justify-content-center">
       // <li className="nav-item">
         // <Link className="nav-link" to="/home">Home</Link>
        //</li>
       // <li className="nav-item">
         // <Link className="nav-link"to="/music">Music</Link>
       // </li>
        //<li className="nav-item">
        //  <Link className="nav-link" to="/About">About</Link>
        //</li>
       // <li>
        //  <Link className="nav-link" to="/search">Search</Link>
        //</li>
      //</ul>
      <nav class="navbar navbar-expand-lg bg-info">
          
      <ul className="social__links">
        <li className="nav-item">
          <BsFacebook /> 
          <a className="nav-link"href="#Facebook">Facebook</a>
        </li>
        <li className="nav-item">
          <AiFillInstagram /> 
          <a className="nav-link"href="#Instagram">Instagram</a>
        </li>
        <li className="nav-item">
          <BsLinkedin />
          <a className="nav-link"href="#Linkedin">Linkedin</a>
        </li>
      </ul>
  
    </nav>
  );
}