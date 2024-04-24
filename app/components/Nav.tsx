"use client";
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import styles from "../styles/layout.module.css";

export const Navb = () => {
  const pathname = usePathname();

  return (
    <Container fluid>
    <Navbar collapseOnSelect expand='lg' bg="light" variant="light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link 
            className={`${styles.link} ${pathname === "/aboutme" ? styles.active : ""  
            }`}
            href="/aboutme"
          >
            Aboutme
          </Nav.Link>
          <Nav.Link 
            className={`${styles.link} ${
                pathname === "/verify" ? styles.active : ""
              }`}
            href="/verify"
          >
            Verify
          </Nav.Link>
          <Nav.Link
            className={`${styles.link} ${
              pathname === "/quotes" ? styles.active : ""
            }`}
            href="/quotes"
          >
            Quotes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};
