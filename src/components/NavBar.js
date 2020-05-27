import React from "react";
import { MDBNav, MDBNavItem } from "mdbreact";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <MDBNav tabs id="navbar">
      <MDBNavItem >
        <h1 className="logo lip-horizontal-bottom">L</h1>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#home">
          <p className="nav-link">Home</p>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#about">
          <p className="nav-link">About</p>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#projects">
          <p className="nav-link">Projects</p>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a className="data-smooth" href="#footer">
          <p className="nav-link">Contact</p>
        </a>
      </MDBNavItem>
    </MDBNav>
  );
};

export default Navbar;
