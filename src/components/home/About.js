import React from 'react';
import Footer from './Footer';
import OurMembers from './Info';
function About() {
  return (
    
    <div className="text-bg-secondary p-4">
    <div>
       
    <section className="about" id="about">

    <h1>PLAY MAROON</h1>
    <p><b>PLAY MUSIC</b>  Is an app that enables users to play their favorite songs from Maroon 5. It will also enable one to type in their lyrics, mark a song as their favorite songs also.</p>
    
    </section>
    </div>
    <section className="footer">
        
    </section>
    
    <section className="container">
      
          <div className="row">
            <div lg="12" className=" col mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </div>
            < OurMembers />
          </div>
        
      
    </section>
    <Footer />
    </div>

  )
}

export default About