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
    <p>Maroon 5 are one of the world's most well-known music acts. Having formed in High School, the group have gone from strength to strength. Lead singer Adam Levine and his bandmates have released seven studio albums, had nine tours and had a whopping 13 Top 20 songs in the UK.</p>
    </section>
    </div>
    <section className="footer">
        
    </section>
    
    <section className="container">
      
          <div className="row">
            <div lg="12" className=" col mb-5 text-center">
            
              <h2 className="section__title">BAND MEMBERS</h2>
            </div>
             <div className="row justify-content-md-center">
            < OurMembers />
          </div>
        </div>
      
    </section>
    <Footer />
    </div>

  )
}

export default About