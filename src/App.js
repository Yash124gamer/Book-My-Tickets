import React,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import {LoginProvider} from './context/LoginContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Movie_dis from "./components/Movie_dis";
import Login from "./components/Login";
import Settings from "./components/Settings";


function App() {

  return (
    <>
    <LoginProvider>
    <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/movies' Component={Movie_dis} />
        <Route path="/login" Component={Login}></Route>
        <Route path="/settings" Component={Settings}></Route>
      </Routes>
    </Router>
    </LoginProvider>
    </>
  );
}

export default App;
