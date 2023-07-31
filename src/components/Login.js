import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import LoginContext from '../context/LoginContext';

export default function Login() {

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    const location = useLocation()
    useEffect(() => {
        document.querySelector(`.${location.state.selected}`).classList.add("current")
        if(location.state.selected=="Login"){
            document.querySelector(".Signin").classList.remove("current")
        }
        else
        if(location.state.selected=="Signin"){
            document.querySelector(".Login").classList.remove("current")
        }
      },);

  return (
    <div className="container">
      <div className="card text-bg-dark border-info mt-5 text-center">
        <div className="card-header">
          <ul className="nav nav-tabs justify-content-center card-header-tabs">
            <li className="nav-item">
              <Link
                className="nav-link Login"
                aria-current="true"
                style={{ color: "white" }}
                to="/Login"
                state={{ selected: "Login" }}
              >
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" style={{ color: "white" }}>
                /
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link Signin ${isLoggedIn.LoggedIn ? "disabled":""}`} 
                style={{color:"white"}}
                to="/Login"
                state={{ selected: "Signin" }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body lightDark"></div>
        {location.state.selected === "Login" ? (
          <Loginpage/>
        ) : (
          <Signuppage/>
        )}
      </div>
    </div>
  );
}
