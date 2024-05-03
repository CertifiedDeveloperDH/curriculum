"use client";
"use client";

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
        <Nav className="ms-auto">
          <Link style={{marginRight:"3vw",color:"black"}}
            href="/"
          >
            Home
          </Link>
          <Link style={{marginRight:"3vw", color:"black"}}
            href="/aboutme"
          >
            Aboutme
          </Link>
          <Link style={{marginRight:"3vw", color:"black"}} 
            href="/verify"
          >
            Verify
          </Link>
          <Link style={{color:"black"}}
            href="/quotes"
          >
            Quotes
          </Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
