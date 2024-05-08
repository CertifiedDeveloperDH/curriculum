"use client";
"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from "../styles/layout.module.css";

export const Navb = () => {
  const pathname = usePathname()

  return (
    <Navbar collapseOnSelect expand='lg'>
      <img src="/code-brackets.svg" className="me-auto" style={{maxHeight:"3em", maxWidth:"3em"}}/>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className= "ms-auto"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <p className="me-auto">Logo</p>
        <Nav className="ms-auto">
        <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : " "}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/aboutme" ? styles.active : " "

        }`}
        href="/aboutme"
      >
        Aboutme
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : " "
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : " "
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
