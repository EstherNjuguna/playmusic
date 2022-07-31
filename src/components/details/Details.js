import React,{useEffect,useState} from 'react'
import Post from '../reviewForm/ReviewForm'
import { useParams } from 'react-router-dom'
const searchSongs="https://theaudiodb.com/api/v1/json/2/mvid.php?i=111522"
export default function Details(){
  
  const[image, setImage] = useState("")
  const[track, setTrack] = useState("")
  const[description, setDescription] = useState("")
  const[video, setVideo] = useState("")
  const[id, setId] = useState("")
  let {songId}=useParams()

  const ReviewData=searchSongs +songId
  const mvidSearch= () => {
    fetch(ReviewData)
    .then(response => response.json())
    .then(data => {
      const mvid= data.mvids[0]
    
      setImage(mvid.strTrackThumb)
       setVideo(mvid.strMusicVid)
        setTrack(mvid.strTrack) 
      setDescription(mvid.strDescriptionEN);
  })
  }
    useEffect( 
        mvidSearch,[]
    )
    return (
     
      <div className='container'>
          <center>
        
          <div className='card' style={{width : 25 + 'rem'}} >
          <img src={image} style={{height: 300 + 'px', width: 400 + 'px', }} alt={track}
           />
          <h5>{track}</h5>
         <p><a href={video} alt={track}>{track}</a></p>
          <p>{description}</p>
          </div>
          </center>
          
          <Post />
      </div>
      
    )
  }