

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
      <footer className="container bg-info">
      
      <div className="row">
    <div className=" d-flex justify-content bg-info">
  
         <BsFacebook /> 
        
          <AiFillInstagram />
        
          <BsLinkedin />
          
          </div> 
          </div>
          
      <div className="col" lg="3" md="4" >
            <div className>
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">PLAY MUSIC</p>
              <p className="office__info">81-00219 Kenya</p>
              <p className="office__info">Phone: +25478564636</p>

              <p className="office__info">Email: playmusic@gmail.com</p>
            </div>
          </div>
  
      
      </footer>
  );
}