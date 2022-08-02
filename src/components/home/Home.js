import React from "react";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="text-bg-secondary p-4">
      <aside>
        <div className="col" >
          <img src="https://www.chargerbulletin.com/wp-content/uploads/2014/09/Maroon-5-band-facebook-300x276.jpg"  alt="Maroon 5" />
        </div>
      </aside>
      <main>
    <form id="home">
      <div className="background text-center img-fluid">
        <img src="https://c.ndtvimg.com/2021-11/6kudlfig_budgetwirelessheadphonesamazon_625x300_04_November_21.jpg?downsize=950:*" alt="" />
      </div>
      <div className="container text-center">


      </div>
      
      <section className="content">
        <div className="title text-center">
          <h1>ENJOY MAROON-5</h1>
          <p>
        
        Lets enjoy some cool <Link to="./music"> pop music </Link>from our all time Band
          </p>
        </div>
       </section>
      
    </form>
    </main>
    <Footer />
    <ScrollToTop />
    </div>
  
  );
}