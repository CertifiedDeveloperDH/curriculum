"use client";
"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import './YourNavbar.css'; // Import your custom CSS file

//import styles from "../styles/layout.module.css";

export const Navb = () => {
  const pathname = usePathname();

  const [selectedLink, setSelectedLink] = useState('home');

  const handleSelect = (selectedKey:string|null) => {
    if (selectedKey !== null){
      setSelectedLink(selectedKey);
    }
  };

  const navbarStyle = {
    backgroundImage: 'url("/code.jpg")',
    backgroundSize: 'cover', // Ensure the image covers the entire Navbar
    position: 'relative', // Ensure that the Navbar content respects z-index
    minHeight: "100vh",
    alignItems: "start",
  };
  const toggleStyle = {
    zIndex: '2', // Set a higher z-index for Navbar toggle
  };

  return (
    <Navbar collapseOnSelect expand='lg'>
      <img src="/code-brackets.svg" className="me-auto" style={{maxHeight:"3em", maxWidth:"3em"}}/>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className= "ms-auto" style={toggleStyle}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <p className="me-auto">Logo</p>
        <Nav className="ms-auto" 
        activeKey={selectedLink}
        onSelect={handleSelect}
        >
          <Nav.Link style={{marginRight:"3vw",color:"black"}} eventKey = "home" className={selectedLink === "home" ? "selected-link" : ""}
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link style={{marginRight:"3vw", color:"black"}} eventKey="about" className={selectedLink === "about" ? "selected-link": ""}
            href="/aboutme"
          >
            Aboutme
          </Nav.Link>
          <Nav.Link style={{marginRight:"3vw", color:"black"}} eventKey = "verify" className={selectedLink==="verify" ? "selected-link": ""}
            href="/verify"
          >
            Verify
          </Nav.Link>
          <Nav.Link style={{color:"black"}} eventKey = "quotes" className={selectedLink==="quotes" ? "selected-link": ""}
            href="/quotes"
            >
            Quotes
          </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
