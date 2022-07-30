import React,{useEffect,useState} from 'react'
import Post from '../reviewForm/ReviewForm'
import { useParams } from 'react-router-dom'
export default function Details(){
  const[image, setImage] = useState("")
  const[track, setTrack] = useState("")
  const[description, setDescription] = useState("")
  const[video, setVideo] = useState("")
  const[id, setId] = useState("")
  let {songId}=useParams()

  useEffect(() => {
      fetch("https://theaudiodb.com/api/v1/json/2/mvid.php?i=111522")
      .then(response => response.json())
      .then((songs) => {
          songs.map((song) => {
              return setImage(song.strTrackThumb), setVideo(song.strMusicVid),  setTrack(song.strTrack), 
              setDescription(song.strDescriptionEN);
          })
      })
    }, [])

    return (
      <div className="text-bg-info p-3 " >
      <div className='container'>
          <center>
          <div className='card' style={{width : 25 + 'rem'}} >
          <img src={image} style={{height: 300 + 'px', width: 400 + 'px', }} alt={track}
           />
          <h5>{track}</h5>
         <p>{video}</p>
          <p>{description}</p>
          </div>
          </center>
          <Post />
      </div>
      </div>
    )
  }