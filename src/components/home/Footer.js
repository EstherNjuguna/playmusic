

import React from "react";

import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <div>
      
      <ul className="links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </div>
  );
}