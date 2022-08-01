import React from "react";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="text-bg-secondary p-4">
    <form id="home">
      <div className="background">
        <img src="https://c.ndtvimg.com/2021-11/6kudlfig_budgetwirelessheadphonesamazon_625x300_04_November_21.jpg?downsize=950:*" alt="" />
      </div>
      <section className="content">
        <div className="title">
          <h1>ENJOY MAROON-5</h1>
          <p>
        
        Lets enjoy some cool <Link to="./music"> pop music </Link>from our all time Band
          </p>
        </div>
       </section>
      <aside>
      <div className="container">

      </div>
      </aside>
    </form>
    <Footer />
    <ScrollToTop />
    </div>
  
  );
}