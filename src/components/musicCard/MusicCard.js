import React,{ useState} from 'react'
import {Link} from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';


function  MusicCard ({songName,songThumbnail,songUrl,idTrack}) {
 const [favorite,setFavorite]=useState("")
 const[watched,setWatched]=useState("")
   function handleFavorites(){
    setFavorite((favorite)=>!favorite)
    return alert("You like this song")
   }
   function handleWatched(){
    setWatched((watched)=>!watched)
    return alert("You want to rewatch")
   }
   const color = favorite ? "red" : "white";
  return (
    <div className="card" style={{width : 25 + 'rem'}}>
         <img src={songThumbnail} className="card-img-top" alt={songName}/>
          <div className="card-body">
          <h5 className="card-title">{songName}</h5>
         <p> <a href={songUrl} >{songName}</a></p>
          <Link to={"/mvid/"+idTrack }className="btn btn-info">Song Description</Link>
          <button style={{ background: color }} onClick={handleFavorites}> {favorite ? "favorite" : "unfavorite"}
          {<FaHeart style={{color: 'red', fontSize: '20px'}}/> }
          </button>
          

<button onClick={handleWatched}>{watched?"Rewatch":"Watch"}
          
</button>
    </div>
  </div>
  )
}

export default MusicCard