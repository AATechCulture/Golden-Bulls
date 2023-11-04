import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="hamburger-icon">☰</div>
        <div className="profile-section">
          <div className="settings">Settings</div>
          <div className="book-flight">Book Flight</div>
          <div className="search">Search</div>
        </div>
      </div>
      <div className="right-section">
        <Link to="/login" className="login-link">Login</Link>
        {/* Add any other content or components for the right section */}
      </div>
    </header>
  );
}

export default Header;
