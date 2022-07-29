import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Search from '../search/Search';
import MusicCard from '../musicCard/MusicCard';
import Details from '../details/Details';

function App() {

  return (
    <Router>
    <>
      <Navbar />
       </>
       <Routes>
        <Route path="/music" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/musiccard" element={<MusicCard />} />
        <Route exact path="mvid/:musicId" element={<Details />}></Route>
       </Routes>
  
    </Router>

  )
  
}

export default App;
