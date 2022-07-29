import React from 'react';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Search from '../search/Search';
import Details from '../details/Details';

function App() {
  return (
    <Router>
    <>
      <Navbar />
       </>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
    
       <Route exactpath="/mvid/:songId"element={<Details />} />
       </Routes>
  
    </Router>

  )
  
}

export default App;
