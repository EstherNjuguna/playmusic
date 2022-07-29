import React from 'react'
import {Link} from 'react-router-dom'
function  MusicCard ({songName,songThumbnail,songUrl,songId}) {
  return (
    <div className="card" style={{width : 25 + 'rem'}}>
         <img src={songThumbnail} className="card-img-top" alt={songName}/>
          <div className="card-body">
          <h5 className="card-title">{songName}</h5>
         <p> <a href={songUrl} >{songName}</a></p>
          <Link to={"/music"+{songId}} className="btn btn-info">Artist Description</Link>

    </div>
  </div>
  )
}

export default MusicCard