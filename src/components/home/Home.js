import React from "react";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="text-bg-secondary p-4">
    <form id="home">
      <div className="background">
        <img src="https://c.ndtvimg.com/2021-11/6kudlfig_budgetwirelessheadphonesamazon_625x300_04_November_21.jpg?downsize=950:*" alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>ENJOY MAROON-5</h1>
          <p>
        Lets enjoy some cool pop music from our all time Band
          </p>
        </div>
        <div className="search">
          <div className="container">
           
            <input type="text" placeholder="Memories" />
          </div>
         
          </div>
         
          <button>Explore Now</button>
        </div>
      
    </form>
    <Footer />
    </div>
  
  );
}