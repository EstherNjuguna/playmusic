import React from 'react';
import Footer from './Footer';
import OurMembers from './Info';
function About() {
  return (
    
    <div className="text-bg-secondary p-4">
    <div>
       
    <section className="about" id="about">

    <h1>PLAY MAROON</h1>
    <p><b>PLAY MUSIC</b> We get a chance to enjoy upfront and vast info about Maroon-5.
    Search from their wide collection of music add a favorite or like button.Also get a chance to delete music and post your lyrics</p>
    
    </section>
    </div>
    <section className="footer">
        
    </section>
    
    <section className="container">
      
          <div className="row">
            <div lg="12" className=" col mb-5 text-center">
            
              <h2 className="section__title">BAND MEMBERS</h2>
            </div>
            <div>
            < OurMembers />
          </div>
        </div>
      
    </section>
    <Footer />
    </div>

  )
}

export default About