import { useContext, useEffect, useState } from 'react';
import darkLogo from './Utilities/logoDark.png';
import { Link, useLocation } from 'react-router-dom';
import menuLogo from './Utilities/menu.svg';
import userLogo from './Utilities/user.svg';
import projectorLogo from './Utilities/projector.svg'
import offersLogo from './Utilities/badge-percent.svg'
import OffCanvasItem from './OffCanvasItem';
import LoginContext from '../context/LoginContext';

export default function Navbar() {

  const location = useLocation()
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if(location.pathname==="/"){
      document.querySelector("#home").classList.add("active");
      document.querySelector("#Login").classList.remove("active");
      document.querySelector("#about").classList.remove("active");
    }
    if (location.pathname === "/about"){
      document.querySelector("#about").classList.add("active");
      document.querySelector("#home").classList.remove("active");
      document.querySelector("#Login").classList.remove("active");
    }
    if (location.pathname === "/Login"){
      document.querySelector("#Login").classList.add("active");
      document.querySelector("#about").classList.remove("active");
      document.querySelector("#home").classList.remove("active");
    }
  },)
  

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid pb-2 flex-wrap">
        <div className='logo'>
          <img src={darkLogo} height="74" className="d-inline-block  align-text-top mb-2" alt="Logo" />
        </div>
        <div className='col'>
          <div className='row '>
            <form className="d-flex   searchBox">
              <input className="form-control me-3 w-75 " type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-light  `} type="submit">Search</button>
            </form>
          </div>
          <div className='row w-75 row2'>
            <ul className="nav nav-pills col navTabs">
              <li className="nav-item mt-3" >
                <Link id='home' className="nav-link "  aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" id='about'  to="/about">About</Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" id='Login'  to="/Login" state={{selected:"Login"}}>{isLoggedIn.LoggedIn ? "Log Out" : "Log In"}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='side-menu'>
          <button type="button" className='rounded-top rounded-bottom' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{backgroundColor:"#343a40",border:"none"}}>
            <img src={menuLogo} alt="Menu" />
          </button>
        </div>
      </div>
    </nav>
    <div className="offcanvas tab offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ backgroundColor: "white" }}></button>
        </div>
        <div className="offcanvas-body col py-2">
            <OffCanvasItem logo={userLogo} name={"Settings"} destination={"Login"}/>
            <OffCanvasItem logo={offersLogo} name={"Unlock Offers"}/>
            <OffCanvasItem logo={projectorLogo} name={"Register Your Theater"}/>
        </div>
      </div>
    </>
  );
}