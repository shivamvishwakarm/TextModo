import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// BrowserRouter as Router,

function Navbar(props){

    return (    
      <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link " href="about">About</a>
        </li> */}
          
          
        </ul>
        <div className="red-Circle mx-2 cursor-pointer"onClick={props.toggleRedMode}>
          {/* <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.color === "dark" ? "light" : "dark"}`}  htmlFor="flexSwitchCheckDefault">switch to red mode</label> */}
        </div>
        <div className="green-Circle mx-2 cursor-pointer" onClick={props.toggleGreenMode}>
          {/* <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.color === "dark" ? "light" : "dark"}`}  htmlFor="flexSwitchCheckDefault">switch to green mode</label> */}
        </div>
        <div className="dark-Circle mx-2 "onClick={props.toggleMode}>

          {/* <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.color === "dark" ? "light" : "dark"}`}  htmlFor="flexSwitchCheckDefault">switch to dark mode</label> */}
        </div>
        <div className="mx-2 my-2 ">
          <label className={`form-check-label text-${props.color === "dark" ? "light" : "dark"}`}  htmlFor="flexSwitchCheckDefault">Switch to diffrent mode</label>
        </div>
      </div>
    </div>
  </nav>
      )
}

Navbar.propTypes = {
    title: PropTypes.string
  };

Navbar.defaultProps = {
    title: "this is brand name"
}


export default Navbar;

