import React, { useState } from 'react';
import './UserForm.css'; 

const UserForm = () => {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateName = () => {
    if (name.length < 3) {
      setNameError('Name must be at least 3 characters long');
    } else {
      setNameError('');
    }
  };

  const validateMobile = () => {
    if (mobile.length < 8 || mobile.length > 15) {
      setMobileError('Mobile must be 8-15 characters long');
    } else {
      setMobileError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter valid email format');
    } else {
      setEmailError('');
    }
  };

  const handleFormSubmit = () => {
    validateName();
    validateMobile();
    validateEmail();

    if (nameError || mobileError || emailError) {
      return;
    }
  };

  return (
    <div className="user-form-container">
      <h2>User Form</h2>
      <form className="user-form">
        <label>Full Name:</label>
        <input
          type="text"
          className={nameError ? 'input-error' : ''}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
        />
        {nameError && <span className="error-message">{nameError}</span>}
        <br />
        <label>User Mobile:</label>
        <div className="mobile-input-container">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="+01">+91 (India)</option>
            <option value="+91">+01 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+90">+90 (Pakistan)</option>
          </select>
          <input
            type="number"
            className={mobileError ? 'input-error' : ''}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
          />
        </div>
        {mobileError && <span className="error-message">{mobileError}</span>}
        <br />
        <label>Email:</label>
        <input
          type="email"
          className={emailError ? 'input-error' : ''}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <span className="error-message">{emailError}</span>}
        <br />
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="gender-select"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
