import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="hamburger-icon">☰</div>
        <div className="profile-section">
        <div className="profile-section-home"><Link to='/'>Home</Link></div>
          <div className="settings"><Link to='/settings'>Settings</Link></div>
          <div className="book-flight"><Link to='/search-flight'>Search Flight</Link></div>
          <div className="search">Search</div>
          <div className='chatbot'> <Link to='/chatbot'>Chatbot</Link></div>
        </div>
      </div>
      <div className="right-section">
      <div className="settings"><Link to="/login" className="login-link">Login</Link></div>
      <div className="settings"><Link to="/reminder">Reminders</Link></div>  
        {/* Add any other content or components for the right section */}
      </div>
    </header>
  );
}

export default Header;
