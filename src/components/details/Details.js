import React, { useState,useEffect } from 'react'
//import { useParams } from 'react-router-dom'

const Details = () => {
    //const search_music="https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024"
    const[image,setImage]=useState("")
    const[track,setTrack]=useState("")
    const[description,setDescription]=useState("")
    //let {songId}=useParams()
   // const songSearch = search_music + songId
    //const mvidSearch= () => {
        //fetch(songSearch) 
       // .then(response => response.json())
        //.then(data => {
          //  const mvid=data.mvids
            //setImage(mvid.strTrackThumb)
           // setDescription(mvid.strDescriptionEN)
            //setTrack(mvid.strTrack)
       // })
        //useEffect(
            //MvidSearch, []
       // )
   // }
    useEffect(() => {
        fetch("https://theaudiodb.com/api/v1/json/2/mvid.php?i=111522")
        .then(response => response.json())
        .then(mvids => {
            mvids.map((mvid) => {
                return setImage(mvid.strTrackThumb) , setDescription(mvid.strDescriptionEN), setTrack(mvid.strTrack);
            })
        })
      },[])
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

export default Details