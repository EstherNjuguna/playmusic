import React, { useEffect, useState } from 'react';
import ScrollToTop from '../home/ScrollToTop';
import MusicCard from '../musicCard/MusicCard';
const Artist="https://theaudiodb.com/api/v1/json/2/mvid.php?i=111522"
export default function Music(){
    const[mvids,setMvids] = useState([])
 const mvidSearch= () => {
      fetch(Artist)
      .then(response => response.json())
      .then(data => {
          setMvids(data.mvids)
      })
  }
      useEffect(
mvidSearch,[]
      )
      const musicCard=mvids.map((mvid) =>(<MusicCard className="col" songName={mvid.strTrack}songUrl={mvid.strMusicVid}songThumbnail= {mvid.strTrackThumb} songId={mvid.idTrack} key={mvid.idTrack} />) )
     


      return (
     
        <div className='container bg-secondary'>
          music
          <div class="row justify-content-md-center">  
            {musicCard}
          </div>
          <ScrollToTop />
        </div>
        
    )
}