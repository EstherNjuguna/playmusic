import React, { useEffect, useState } from 'react';
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
      let musicCard=mvids.map((mvid) =>(<MusicCard className="col" songName={mvid.strTrack}songUrl={mvid.strMusicVid}songThumbnail= {mvid.strTrackThumb} songId={mvid.idTrack} key={mvid.idTrack} />) )
      return (
        <div className="text-bg-secondary p-4">
        <div className='container'>
          music
          <div className='row'>
            {musicCard}
          </div>
        </div>
        </div>
    )
}