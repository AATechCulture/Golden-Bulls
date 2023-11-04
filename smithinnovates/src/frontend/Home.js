import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with username:', username);
  };

  return (
    <div className="login-main-container">
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username/AA-Advantage number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
    </div>
  );
}

function Signup() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signing up with username:', newUsername);
    console.log('Email:', email);
    console.log('State:', state);
    console.log('Country:', country);
  };

  return (
    <div className="signup-main-container">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <div>
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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