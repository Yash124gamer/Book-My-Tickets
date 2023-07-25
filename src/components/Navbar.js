import { useState } from 'react';
import darkLogo from './Utilities/logoDark.png';
import { Link } from 'react-router-dom';
import menuLogo from './Utilities/menu.svg';


export default function Navbar() {

  const [activePage, setActivePage] = useState("#home");


  const change = (event) => {
    let id = event.target.id;
    document.querySelector(activePage).classList.remove("active");
    document.querySelector(`#${id}`).classList.add("active");
    setActivePage(`#${id}`);
  }

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
                <Link id='home' className="nav-link active" onClick={change} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" id='about' onClick={change} to="/about">About</Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" id='link' onClick={change} to="/">Link</Link>
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
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ backgroundColor: "white" }}></button>
        </div>
        <div className="offcanvas-body">
          This is a Right OffCanvas 
        </div>
      </div>
    </>
  );
}