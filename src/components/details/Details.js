import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const search_music = "https://theaudiodb.com/api/v1/json/2/mvid.php?i=111522"

export default function Details(){

    const [image, setImage] = useState("")
    const [track, setTrack] = useState("")
    const [description, setDescription] = useState("")

    let {songId} = useParams()

    const actualSearch = search_music + songId

    const mvidSearch = () => {
        fetch(actualSearch)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
                const mvid = data.mvids

                setImage(mvid.strTrackThumb)
                setDescription(mvid.strDescriptionEN)
                setTrack(mvid.strTrack)
             })
    }

    useEffect(
       mvidSearch, []
    )

    return (
      <div>
          <center>
              <img src={image} alt={track}style={{height:300 +'px',width:300 +'px'}} />
          <h3>{track}</h3>
         
          <p>{description}</p>
          </center>
          
      </div>
    )
  }