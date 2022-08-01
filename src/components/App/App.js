import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import MusicCard from '../musicCard/MusicCard';
import Details from '../details/Details';
import Music from '../music/Music';
import About from '../home/About';

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
        {/* <Route exact path="/DropDown" element={<DropDown /> }></Route> */}
        <Route exact path="/detail/:songId" element={<Details />} />
        <Route path="/about" element={<About />} />
       </Routes>
  
    </Router>

  )
  
}

export default App;
