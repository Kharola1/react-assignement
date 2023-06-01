import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter valid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8 || password.length > 15) {
      setPasswordError('Password must be 8-15 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail();
    validatePassword();

    if (emailError || passwordError) {
      return;
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form">
        <label>User Email:</label>
        <input
          type="email"
          className={emailError ? 'input-error' : ''}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <span className="error-message">{emailError}</span>}
        <br />
        <label>User Password:</label>
        <input
          type="password"
          className={passwordError ? 'input-error' : ''}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
        />
        {passwordError && <span className="error-message">{passwordError}</span>}
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
