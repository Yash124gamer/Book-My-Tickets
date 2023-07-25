import React,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Movie_dis from "./components/Movie_dis";


function App() {

  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/movies' Component={Movie_dis} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
