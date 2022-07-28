import React from 'react'
import {Link} from 'react-router-dom'
function  MusicCard ({artistName,artistThumbnail,artistId}) {
  return (
    <div className="card" style="width: 18rem;">
         <img src={artistThumbnail} className="card-img-top" alt={artistName}/>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <Link to={"/music/"+ artistId} className="btn btn-info">Artist Description</Link>
    </div>
  </div>
  )
}

export default MusicCard