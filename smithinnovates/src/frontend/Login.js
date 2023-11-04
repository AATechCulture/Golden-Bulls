import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../backend/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'; // Import the sendPasswordResetEmail function
import { useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Your existing login logic here
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent. Check your inbox.');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login-main-container">
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Email/AA-Advantage number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        <span onClick={handleForgotPassword} className="forgot-password-link">
          Forgot Password?
        </span>
      </p>
    </div>
  );
}

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    country: country,
    username: newUsername,
    email: email,
    state: state,
  };

  const handleSignup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          const user = auth.user;
          const userRef = collection(db, `users/${user?.uid}/info`);

          addDoc(userRef, newUser)
            .then(() => {
              console.log("Data written to database");
            })
            .catch((error) => {
              console.error("Error writing data to database: ", error);
            });

          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup-main-container">
      <h1>Sign Up</h1>
      <div>
        <input
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}


function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="home-main-container">
      {isLogin ? (
        <div>
          <Login />
          <p>Are you new? <button onClick={() => setIsLogin(false)}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          <Signup />
          <p>Already have an account? <button onClick={() => setIsLogin(true)}>Login</button></p>
        </div>
      )}
    </div>
  );
}

export default Home;