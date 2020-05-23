import React from "react";

import { MDBNav, MDBNavItem } from "mdbreact";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <MDBNav tabs id="navbar">
    <MDBNavItem>
        
          <h1 className="logo">L</h1>
          
    
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#home">
          {/* <i className="fas fa-home"></i> */}
          <p className="nav-link">Home</p>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#about">
          {/* <i className="fas  fa-list-alt"></i> */}
          <p className="nav-link">About</p>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#projects">
          {/* <i className="fas fa-code"></i> */}
          <p className="nav-link">Projects</p>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#contact">
          {/* <i className="fas fa-address-card"></i> */}
          <p className="nav-link">Contact</p>
        </a>
      </MDBNavItem>
    </MDBNav>
  );
};

export default Navbar;
