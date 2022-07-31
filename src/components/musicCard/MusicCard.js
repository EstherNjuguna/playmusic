import React from 'react'
import {Link} from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import {AiFillDelete} from "react-icons/ai";

function  MusicCard ({songName,songThumbnail,songUrl,idTrack}) {
  return (
    <div className="card" style={{width : 25 + 'rem'}}>
         <img src={songThumbnail} className="card-img-top" alt={songName}/>
          <div className="card-body">
          <h5 className="card-title">{songName}</h5>
         <p> <a href={songUrl} >{songName}</a></p>
          <Link to={"/mvid/"+idTrack }className="btn btn-info">Song Description</Link>
          <button>
          <FaHeart style={{color: 'red', fontSize: '20px'}}/>
          </button>
          <button>
            <AiFillDelete style={{color: 'black', fontSize: '20px'}}/>
          </button>

    </div>
  </div>
  )
}

export default MusicCard