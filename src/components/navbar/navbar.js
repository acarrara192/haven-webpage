import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/haven-logo.jpg'; // Adjust the image path
import { Link } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';



function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log('Mobile menu toggled:', mobileMenuOpen);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  

  return (
    <div>
            <ClickAwayListener onClickAway={() => {
        setMobileMenuOpen(false);
        setShowDropdown(false);
      }}>
      <div className="navbar">
        <div className="logo-and-title">
          <img src={logo} alt="Haven Logo" className="logo" />
          <h1 className="title">HAVEN</h1>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
        ☰        
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/home" onClick={toggleMobileMenu}> Home </Link>
          <Link to="/rules" onClick={toggleMobileMenu}> Server Rules </Link>
          <Link to="/lore" onClick={toggleMobileMenu}> Lore </Link>
          <Link to="/downtime" onClick={toggleMobileMenu}> Downtime Activities </Link>
          <div className={`dropdown ${showDropdown ? 'show-dropdown' : ''}`}>
            <p className="dropbtn" onClick={toggleDropdown}> Server Mechanics ▾ </p>

                    <div className="dropdown-content">
                        <Link className="external-link" to="https://homebrewery.naturalcrit.com/share/3cnTpMKRbbMm" target="_blank" onClick={toggleMobileMenu}> General ↗ </Link>
                        <Link className="external-link" to="https://homebrewery.naturalcrit.com/share/1N__TC6V3skYltjsFX-CRcP9AVjbFWZbRFoZcHJJI-wMh" target="_blank" onClick={toggleMobileMenu}> Masterwork Weapons & Armor ↗ </Link>
                        <Link className="external-link" to="https://homebrewery.naturalcrit.com/share/1Wub-haAn0THdmeK1k1dcjRfaXOH98V7q6es9-VDXaMmV" target="_blank" onClick={toggleMobileMenu}> Book of Powers & Deities ↗ </Link>
                        <Link className="external-link" to="https://homebrewery.naturalcrit.com/share/4y71vtT721Xi" target="_blank" onClick={toggleMobileMenu}> Prestige Levels ↗ </Link>
                        <Link className="external-link" to="https://homebrewery.naturalcrit.com/share/lmwx4Ex7qJIw" target="_blank" onClick={toggleMobileMenu}> Guilds ↗ </Link>
                    </div>
                </div>
        </div>
      </div>
      </ClickAwayListener>
    </div>
  );
}

export default Navbar;
