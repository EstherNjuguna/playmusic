import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Search from '../search/Search';
import MusicCard from '../musicCard/MusicCard';
import Details from '../details/Details';
import Music from '../music/Music';

function App() {

  return (
    <Router>
    <>
      <Navbar />
      
       </>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/musiccard" element={<MusicCard />} />
        <Route exact path="/mvid/:songId"element={<Details />}></Route>
        <Route exact path="/search" element={<Search /> }></Route>
       </Routes>
  
    </Router>

  )
  
}

export default App;
