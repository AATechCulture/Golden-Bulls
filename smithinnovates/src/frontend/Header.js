import React, { useEffect, useState } from 'react';
import './styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import {auth } from '../backend/firebase' 
import { signOut, onAuthStateChanged } from "firebase/auth"; 


function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in the authentication state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

    const handleSignOut = () => {
      signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    }).catch((error) => {
      // An error happened.
      console.error("An error happened: ", error);
    })}
  
  const navigate = useNavigate();
  // Handle the click event for the Logout/Login button
  const handleClick = () => {
    if (user) {
      // User is signed in, sign them out
      handleSignOut();
    } else {
      // User is signed out, redirect them to the login page
      navigate("/login");
    }
  };

  const homeClick = () => {
        navigate("/");       
    };
  return (
    <header className="header">
      <div className="left-section">
        
        <img onClick={homeClick} className='header-logo' src='/media/logo.png' alt=''/>
        <div className="hamburger-icon">☰</div>
        <div className="profile-section">
        <div className="profile-section-home"><Link to='/'>Home</Link></div>
          <div className="settings"><Link to='/settings'>Settings</Link></div>
          <div className="book-flight"><Link to='/search-flight'>Search Flight</Link></div>
          <div className="search">Search</div>
          <div className='chatbot'> {user ? (<Link to= '/chatbot' className='header-link'><span>ChatBot</span></Link>) :
        (<span>ChatBot</span>)}</div>
        </div>
      </div>
      <div className="right-section">
      <div className="settings">{user ? (
        // User is signed in, display Logout button
        <span onClick={handleClick} className="header-link">
          Logout
        </span>
      ) : (
        <Link to="/login" className="header-link">
          <span>Login</span>
        </Link>
      )}</div>
      <div className="settings"><Link to="/reminder">Reminders</Link></div>  
        {/* Add any other content or components for the right section */}
      </div>
    </header>
  );
}

export default Header;
