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
  };
  const toggleStyle = {
    zIndex: '2', // Set a higher z-index for Navbar toggle
  };

  return (
    <Navbar collapseOnSelect expand='lg' style={navbarStyle}>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className= "ms-auto" style={toggleStyle}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <p className="me-auto">Logo</p>
        <Nav className="ms-auto">
          <Link
            href="/"
          >
            Home
          </Link>
          <Link 
            href="/aboutme"
          >
            Aboutme
          </Link>
          <Link 
            href="/verify"
          >
            Verify
          </Link>
          <Link
            href="/quotes"
          >
            Quotes
          </Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
